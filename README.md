lullaby-special-starter
====

## 事前に用意するもの
- node.js (version 5.0.0以上)

## 環境構築
```
# 開発に使うnpmパッケージをインストール
npm install
```

## ファイル構成

- `README.md`
  - このファイルです。
- `package.json`
  - 依存するnpmパッケージに関する設定ファイルです。
- `gulpfile.babel.js`
  - gulpタスクに関する設定ファイルです。
- `public`
  - Web公開されるファイルの置き場所です。
- `src/styles`, `src/scripts`
  - ビルドに必要な各種ソースコードです。

## 開発手順

開発時に必要なタスクは、npm scriptおよびgulp.jsで管理されています。
shellから以下のコマンドを実行することで、各種ビルド・タスク実行が可能です。

- `npm start`
  - すべてのソースコードをビルドし、開発用ブラウザを立ち上げ、その後ソースコードに修正があれば自動ビルド・自動ブラウザ更新します
  - 基本的には、このコマンドを実行しておくだけで開発が可能なはずです。

## 使用言語

- Javascript: [ES2015(ECMAScript 6)](https://babeljs.io/docs/learn-es2015/)

## 依存ライブラリ

`npm install`でインストールされるライブラリ（一部）です。
全てを理解していなくても、開発は問題なく行えますが、挙動に問題がある場合・カスタマイズしたい場合などに参照してみてください。

- [gulp.js](http://gulpjs.com/)
- [Babel](https://babeljs.io/)
- [pleeease](http://pleeease.io/)
- [browser-sync](https://www.browsersync.io/)
- [jQuery](https://jquery.com/)
- [howler.js](https://howlerjs.com/)
- [Reset CSS](http://meyerweb.com/eric/tools/css/reset/)

## 参考

- [kayac-html5-starter](https://github.com/fnobi/kayac-html5-starter)