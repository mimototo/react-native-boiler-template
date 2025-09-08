# React Native Boiler Template

React Native + Expo + Supabaseを使用した認証機能付きのボイラープレートプロジェクトです。

## 🚀 機能

- **認証システム**: Supabaseを使用したユーザー登録・ログイン機能
- **ルーティング**: Expo Routerによるファイルベースルーティング
- **UI コンポーネント**: 再利用可能な共通コンポーネント
- **テーマシステム**: 統一されたデザインシステム
- **TypeScript**: 型安全性を保証
- **リンター**: Biomeによるコード品質管理

## 📋 必要要件

- Node.js (v18以上)
- Expo CLI
- Supabaseアカウント

## 🛠️ セットアップ

### 1. プロジェクトの展開

圧縮ファイルを解凍し、プロジェクトディレクトリに移動してください。

```bash
# 圧縮ファイルを解凍後
cd react-native-boiler-template
```

### 2. 依存関係のインストール

```bash
npm install
# または
yarn install
# または
bun install
```

### 3. 環境変数の設定

`.sample.env`ファイルを`.env`にコピーし、Supabaseの設定を追加してください。

```bash
cp .sample.env .env
```

`.env`ファイルを開き、以下の値を設定してください：

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabaseプロジェクトの設定

1. [Supabase](https://supabase.com)でアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトのURLとanon keyを取得
4. 上記の`.env`ファイルに設定

### 5. アプリケーションの起動

```bash
npm start
# または
yarn start
# または
bun start
```

## 📁 プロジェクト構造

```
├── app/                    # ページ（Expo Router）
│   ├── (auth)/            # 認証済みユーザー向けページ
│   │   └── home.tsx       # ホーム画面
│   ├── (public)/          # 一般公開ページ
│   │   ├── signIn.tsx     # ログイン画面
│   │   ├── signUp.tsx     # 新規登録画面
│   │   └── welcome.tsx    # ウェルカム画面
│   ├── _layout.tsx        # ルートレイアウト
│   └── index.tsx          # エントリーポイント
├── src/
│   ├── components/        # 再利用可能なコンポーネント
│   │   ├── common/        # 共通コンポーネント
│   │   ├── icons/         # アイコンコンポーネント
│   │   ├── layout/        # レイアウトコンポーネント
│   │   └── provider/      # コンテキストプロバイダー
│   ├── constants/         # 定数
│   │   └── theme.ts       # テーマ設定
│   ├── lib/               # 外部ライブラリの設定
│   │   └── supabase.ts    # Supabaseクライアント
│   ├── services/          # APIサービス
│   ├── types/             # TypeScript型定義
│   └── utils/             # ユーティリティ関数
└── src/assets/            # 静的アセット
    └── images/            # 画像ファイル
```

## 🎨 テーマシステム

プロジェクトには統一されたテーマシステムが含まれています：

- **カラー**: プライマリ、セカンダリ、テキストカラーなど
- **フォント**: ウェイトとサイズの定義
- **スペーシング**: 統一された余白設定
- **ボーダーラディウス**: 角丸の設定

## 🔧 利用可能なスクリプト

```bash
# 開発サーバーを起動
npm start

# Androidで実行
npm run android

# iOSで実行
npm run ios

# Webで実行
npm run web

# リンターを実行
npm run lint

# コードをフォーマット
npm run format

# TypeScriptの型チェック
npm run type
```

## 🔐 認証フロー

1. **初回起動**: ウェルカム画面が表示
2. **ログイン**: メールアドレスとパスワードでログイン
3. **新規登録**: 新しいアカウントを作成
4. **認証後**: ホーム画面にリダイレクト

## 🛡️ セキュリティ

- 環境変数による機密情報の管理
- Supabaseの認証システムを活用
- TypeScriptによる型安全性

## 📱 対応プラットフォーム

- iOS
- Android
- Web

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 📞 サポート

質問や問題がある場合は、プロジェクトの提供者にお問い合わせください。

---

**Happy Coding! 🎉**
