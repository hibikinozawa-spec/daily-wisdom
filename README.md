# GOGEN（五言）

著名な経営者・思想家・偉人の格言と小話を、**一日に五つ**届ける Next.js アプリです。

## 特徴

- 日付（Asia/Tokyo）から決定的に選ばれる「今日の五言」
- 8カテゴリ（リーダーシップ / 革新 / 忍耐 / 知恵 / 経営 / 勇気 / 生き方 / 学び）
- アーカイブで過去の日付の五言を閲覧
- 格言と小話の両方を収録

## 技術スタック

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## ローカル起動

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いてください。

## 公開 URL

- アプリ: https://daily-wisdom-gilt.vercel.app
- リポジトリ: https://github.com/hibikinozawa-spec/daily-wisdom

GitHub の `main` へ push すると、Vercel が自動で再デプロイします。

手動デプロイ:

```bash
npx vercel --prod
```

## ライセンス

ソースコードは MIT。掲載している言葉は広く知られた格言・逸話の意訳・要約であり、厳密な史料訳ではありません。
