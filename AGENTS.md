# CODE QUEST LP 実装ガイド

- Figma Makeのデザイン、確定文言、`public/images`に登録済みの画像アセットをデザインの正とします。
- Vite、React、strict TypeScript、Tailwind CSS v4、npmを使用します。npmを維持し、依存関係を変更した場合は`package-lock.json`も同期します。
- Tailwind CSS v4は`@tailwindcss/vite`、`src/index.css`の`@import "tailwindcss"`と`@theme`によるCSS-first構成を維持します。Tailwind v3形式の`tailwind.config.*`やPostCSS設定を混在させません。
- スタイルはTailwindのテーマトークンとユーティリティを優先します。`src/index.css`にはテーマ、リセット、全体設定、`:focus-visible`、reduced motionなどのグローバルルールに加え、複数箇所で再利用する共通コンポーネントスタイルをまとめます。
- Reactコンポーネントは`export const ComponentName = () => {}`形式、ファイル名は小文字のkebab-case、コンポーネント識別子はPascalCaseを基本とします。
- 繰り返し使用する文言やコース情報は`src/data/content.ts`にまとめます。Figma由来の文言やサービス条件を推測で変更しません。
- 具体的にアクセシブルな複合コンポーネントが必要な場合だけライブラリを追加します。ルーティング、API、認証、バックエンド、Storybook、実体のない外部URLは追加しません。
- 状態はReactで宣言的に管理します。`document.querySelector`、`classList`、`document.body.style`による画面制御は追加せず、必要なDOM操作にはrefとReactイベントを使います。
- スクロール表示演出はFramer Motionの`Reveal`コンポーネントを使い、`prefers-reduced-motion`対応を維持します。
- モバイルメニューでは背景の`inert`、Escapeで閉じる操作、Tab／Shift+Tabのフォーカストラップ、開閉時のフォーカス移動と復帰を維持します。
- セマンティックHTML、キーボード操作、可視フォーカス、十分なコントラスト、見出し階層、ARIA状態を維持します。
- Vitest + Testing Libraryで主要セクションと操作状態、PlaywrightでDesktop `1440px`、Tablet `768px`、Mobile `390px`、モバイルメニュー、FAQ、横スクロール、コンソールエラーを検証します。
- 変更後は`npm run validate`を実行し、ブラウザ依存関係が利用可能な場合は`npm run test:e2e`も実行します。
- アプリケーションソースへ書き込む実装エージェントは同時に1体だけにします。分析・品質確認エージェントは読み取り専用とし、修正依頼は実装担当へ戻します。
- GitHubへの公開、Vercelへのデプロイ、Gitの履歴変更は親エージェントが担当し、実装担当は明示的な指示なしに実行しません。
