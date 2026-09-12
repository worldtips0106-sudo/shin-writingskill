# 公式サイト（Astro + Tailwind CSS）

インスタ発信者の母艦サイト。1ページ構成・スマホ縦読み前提。

## 1. プレビューの出し方

```bash
npm run dev
```

ターミナルに出る `http://localhost:4321/` をブラウザで開く。
止めるときは `Ctrl + C`。

（部品のダウンロードが済んでいない場合だけ、先に `npm install`）

## 2. 文章とリンクを直す

**基本は `src/data/site.ts` の1ファイルだけ**書き換えればOKです。
「【要入力】」と書いてある所を、自分の情報に置き換えてください。

| 直したいもの | 書き換える場所 |
|---|---|
| サイト名・キャッチ・説明文 | `site` |
| LINE登録URL（一番押したいボタン） | `mainCta.url` |
| プロフィール文・実績数字 | `about` |
| 商品・講座 | `products` |
| アフィリ商品 | `affiliates` |
| SNS・連絡先 | `sns` |

YouTubeの動画IDは `https://youtu.be/**XXXXXXXXXXX**` の太字部分だけを書きます。

## 3. 画像を入れる

`public/images/` に、この名前で置く（詳細は `public/images/README.txt`）。

- `profile.jpg` … プロフィール写真（正方形）
- `insta-01.jpg` 〜 `insta-06.jpg` … Instagram投稿の画像（正方形）

画像が無い間は「ここに画像を入れる」のグレー画像が出ます。

## 3.5 上部メニューを編集する

`src/data/site.ts` の `nav` を編集します（並び替え・削除・追加）。
`hash` は各セクションのidと対応しています（`#about` `#service`
`#items` `#contact`）。

メニューバーの左に出る名前は `site.shortName` です。

## 4. セクションの順番を変える／消す

`src/pages/index.astro` の並びを入れ替える・行を消すだけ。

現在の並び：
ヒーロー → About → サービス → 使ってよかったもの(PR) → つながる → 画面下の追従ボタン

## 5. 色を変える

`src/styles/global.css` の上のほうにある色コードを書き換える。
（`--color-accent` がボタンなどのくすみブルーグレー、`--color-base` が背景の生成り白）

## 6. よくある調整

- **画面下の追従ボタン**
  PCでは非表示（上部メニューのLINEボタンを使う）、スマホでのみ表示されます。
  スマホでも消したいときは `src/components/StickyCta.astro` の
  一番外側の `class` の `lg:hidden` を `hidden` に変えてください。
- **アフィリのセクションを使わない**
  `src/pages/index.astro` から `<Affiliate />` の行と `import` の行を消す。
  ※使う場合、「PR」表記と `rel="sponsored nofollow"` は消さないでください（ステマ規制）。

## 7. 公開するとき

`05_公開_GitHubとCloudflare.md` の手順へ。
公開先URLが決まったら `astro.config.mjs` の `site:` を自分のURLに書き換える。

## ファイル構成

```
src/
├── data/site.ts          ← 文章・リンクはぜんぶここ
├── pages/index.astro     ← セクションの並び順
├── layouts/Layout.astro  ← ページ全体の枠・タイトル・OGP
├── styles/global.css     ← 色・フォント
└── components/           ← 各セクションの見た目
public/images/            ← 画像
```
