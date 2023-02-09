---
sidebar_position: 2
---

# 検知ルールの例

### subprocessパッケージによる新規プロセスの作成

マルウェアの実行・バックドアの実行・外部コマンドによる悪用などに使用されることがあります。

```yaml
- name: code executed by subprocess
  func: _execute_child
  file: subprocess.py
  value:
    cmd: "$func_args[args]"
  level: alert
```

#### 推奨条件記述

外部コマンド(例 : `imagemagick`)での処理を行う場合、呼び出し関数名を指定します。

```yaml
  condition:
    func: # 呼び出し元関数
      allow: # 呼び出し元関数に以下の関数が含まれる場合、検知しない
        - imagemagick_convert
```

Flaskで開発サーバーで動作させる場合、自身のプログラムファイルの実行を指定します。

```yaml
  condition:
    arg: # 引数
      allow: # 引数に以下が含まれる場合、検知しない
        - "['/usr/local/bin/python', '/app/main.py']"
```

### osパッケージのpopenによる新規プロセスの作成

マルウェアの実行・バックドアの実行・外部コマンドによる悪用などに使用されることがあります。

```yaml
- name: code executed by os.popen
  func: popen
  file: os.py
  value:
    cmd: "$func_args[cmd]"
  level: alert
```

## urllibによる外部サーバーへのhttp接続

外部サーバーへの情報流出などに使用されることがあります。

```yaml
- name: http request by urllib
  func: create_connection
  file: socket.py
  value:
    address: "$func_args[address]"
  level: warn
```

### requestによる外部サーバーへのhttp接続

外部サーバーへの情報流出などに使用されることがあります。

```yaml
- name: http request by requests
  func: create_connection
  file: connection.py
  value:
    address: "$func_args[address]"
  level: warn
```

### requestsによる外部サーバーへのhttp接続時のIPアドレスの記録

`ip2num`関数を検知することで、requestsによる外部サーバーへのhttp接続時のIPアドレスを記録できます。

```yaml
- name: connected ip addr by requests
  func: ip2num
  file: request.py
  value:
    ip: "$func_args[ipAddr]"
  level: info
```

### DNSの名前解決の記録

`getaddrinfo`関数を検知することで、外部サーバーへの接続時のDNSの名前解決を記録できます。

```yaml
- name: lookup dns record
  func: getaddrinfo
  file: socket.py
  value:
    host: "$func_args[host]"
  level: info
```

#### 推奨条件記述

Flaskを起動する際に、自身のIPアドレス`0.0.0.0`への名前解決が実行されることがあります。

```yaml
  condition:
    arg: # 引数
      allow: # 引数に以下が含まれる場合、検知しない
        - 0.0.0.0
```

### 環境変数の取得

環境変数に格納された鍵情報や機密パラメーターの流出などに使用されることがあります。

```yaml
- name: process getenv
  func: getenv
  file: os.py
  value:
    key: "$func_args[key]"
  level: info
```
