# CODE QUEST LP

Vite、React、TypeScript、Tailwind CSS 4で構築したCODE QUESTのランディングページです。

## セットアップ

Node.jsは `.nvmrc` に指定した `24.22.1` を使用します。
`package.json` の `engines.node` でも、修正済みのNode.js 24系を指定しています。
検証環境のnpmは `11.19.1` です。

`nvm` を導入済みの場合は、次の手順でセットアップします。

```bash
nvm install
nvm use
npm ci
npm run dev
```

Tailwind CSS 4は `@tailwindcss/vite` 経由でビルドします。
テーマと共通スタイルは `src/index.css` で管理します。

## 検証

```bash
npm audit
npm run validate
npm run test:e2e
```

`validate` はフォーマット、lint、型チェック、単体テスト、本番ビルドを実行します。
E2EテストではDesktop（1440px）、Tablet（768px）、Mobile（390px）で、
表示、モバイルメニュー、FAQ、横スクロール、コンソールエラーを確認します。
初回は `npx playwright install chromium` でテスト用ブラウザをインストールしてください。

E2Eテストは専用の開発サーバーを起動し、既存のサーバーを再利用しません。
ポート `4173` が使用中の場合は、次のように空いているポートを指定します。

```bash
PLAYWRIGHT_PORT=4174 npm run test:e2e
```

## 本番ビルド

```bash
npm run build
npm run preview
```

ビルド結果は `dist` に出力されます。

## Node.js・依存関係の更新

Node.jsを更新する場合は `.nvmrc` と `engines.node` を確認し、
npmのバージョンを変更した場合は `packageManager` も更新します。
依存関係を変更する場合は `package-lock.json` を同期します。
更新後は `npm ci`、`npm audit`、`npm run validate`、`npm run test:e2e` を実行してください。

VercelのNode.js設定は `24.x` を使用します。
マイナー・パッチ更新はVercelが管理し、ローカル用の `.nvmrc` とは別に扱います。
詳細は [VercelのNode.jsバージョン管理](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) を参照してください。
