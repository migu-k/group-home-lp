# グループホーム朝日 LP

障害者施設グループホーム「グループホーム朝日」のランディングページです。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Icons

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構成

```
group-home-lp/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx         # メインページ
│   └── globals.css      # グローバルスタイル
├── components/
│   ├── Header.tsx       # ヘッダーコンポーネント
│   ├── Footer.tsx       # フッターコンポーネント
│   ├── Hero.tsx         # ヒーローセクション
│   ├── Features.tsx     # 施設の特徴
│   ├── Location.tsx     # 所在地・交通アクセス
│   ├── Pricing.tsx      # 料金プラン
│   ├── System.tsx       # 受け入れ体制
│   ├── Flow.tsx         # ご入居までの流れ
│   ├── Testimonials.tsx # お客様の声
│   ├── FAQ.tsx          # よくある質問
│   ├── Gallery.tsx      # 施設ギャラリー
│   └── Overview.tsx     # 施設概要
├── data/
│   ├── facility.ts      # 施設情報
│   ├── pricing.ts       # 料金情報
│   ├── testimonials.ts # お客様の声データ
│   ├── faq.ts          # FAQデータ
│   └── overview.ts     # 施設概要データ
└── public/             # 静的ファイル
```

## 機能

- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- スムーズスクロール
- モバイルメニュー（ハンバーガーメニュー）
- FAQアコーディオン
- 画像ギャラリー（ライトボックス機能）
- アクセシビリティ対応

## ライセンス

このプロジェクトはプライベートプロジェクトです。
