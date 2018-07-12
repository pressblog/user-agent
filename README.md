# User Agent

User Agentからブラウザとデバイスを判定する

![プレビュー](https://github.com/pressblog/user-agent/blob/master/preview.png)

# テスト

`index.html`を各ブラウザで開いてください

# コントリビュート

このリポジトリにコミットしてくれる人は、以下の方法でローカルでセットアップをしてください。

## パッケージインストール

```
$ yarn install
```

## ビルド

`src/index.js`をビルドして`dist/index.js`にアウトプットします

```
$ npm run build
```

## ローカルサーバー

あなたの好きなプログラミング言語のビルトインサーバーを使ってください :)
ドキュメントルートは`.`です

rubyの場合

```
$ ruby -run -e httpd . -p 8000
```