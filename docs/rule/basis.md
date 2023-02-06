---
sidebar_position: 1
---

# 検知ルールの構文

## 基本

必須パラメーターとして以下の5つを指定する必要があります。

> 記述例
>
> ```yaml
> - name: process getenv
>   func: getenv
>   file: os.py
>   value:
>     key: "$func_args[key]"
>   level: info
> ```

- `name` : ルールの名称
- `func` : 検知する関数名
- `file` : 検知する関数が記述されたプログラムファイル名
- `value.key` : 検知結果画面でハイライトするパラメーター
- `level` : 検知の重要度(`alert` `warn` `info`)

## 条件記述

必須パラメーターに加え、誤検知を除外するための条件記述パラメーター`condition`がサポートされています。

> 記述例
>
> ```yaml
>   condition:
>     arg: # 引数
>       allow: # 引数に以下が含まれる場合、検知しない
>         - 0.0.0.0
>     func: # 呼び出し元関数
>       disallow: # 呼び出し元関数に以下の関数が含まれる場合、他の許可ルールに関わらず検知する
>         - render_template_string
>     remote_addr: # アクセス元IPアドレス
>       allow: # アクセス元IPアドレスに以下が含まれる場合、検知しない
>         - 127.0.0.1
>     request_path: # URLのPath
>       allow: # URLのPathに以下が含まれる場合、検知しない
>         - /getenv
> ```

条件の対象として4つのパラメーターがあります。

- `arg` : 引数
- `func` : 呼び出し元関数
- `remote_addr` : アクセス元IPアドレス
- `request_path` : URLのPath

条件の対象パラメーターそれぞれに対し条件パラメーターがあります。

- `allow` : 条件の対象に指定した値が含まれる場合、検知しない
- `disallow` : 条件の対象に指定した値が含まれる場合、他の許可ルールに関わらず検知する
