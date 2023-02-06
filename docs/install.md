---
sidebar_position: 2
---

# 導入

## Python

現在FlaskおよびDjangoフレームワークに対応したプロファイラを準備しています。

pipパッケージとして公開し

```python
from flask import *

# Python Flaskの初期化
app = Flask(__name__)

# Phrudeプロファイラの読み込み
from python_profiler import FlaskProfiler

# Phrudeプロファイラの設定
FlaskProfiler(
    app,
    app_name="Python Flask DemoApp",
    key="40593ad8-ef09-4a3d-a60d-19f6a195c55a",
    endpoint="https://demo.phrude.com/api",
)
```

このように導入するWebアプリでインポートし、設定パラメーターと共に初期化することで動作する予定です。

すでに記述しているWebアプリの処理には影響を与えることなく、7行の設定で動作します。
