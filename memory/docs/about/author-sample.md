---
title: Author Icon Sample
---

# Author Icon Sample

`cat.png` を使って、VitePress 上で「このページの作成者」を見せるサンプルです。

## Preview

<div class="author-demo">
  <div class="author-demo-card">
    <img class="author-demo-avatar" src="./cat.png" alt="Cat author avatar">
    <div>
      <p class="author-demo-name">Captain Cat</p>
      <p class="author-demo-role">Documentation Author</p>
      <p class="author-demo-meta">Updated: 2026-03-12</p>
      <p class="author-demo-meta">Short bio: VitePress pages are friendlier with a face.</p>
    </div>
  </div>
</div>

## Example Markup

```html
<div class="author-demo-card">
  <img class="author-demo-avatar" src="./cat.png" alt="Cat author avatar">
  <div>
    <p class="author-demo-name">Captain Cat</p>
    <p class="author-demo-role">Documentation Author</p>
    <p class="author-demo-meta">Updated: 2026-03-12</p>
  </div>
</div>
```

## Notes

- 画像はページと同じ階層に `cat.png` を置いて `./cat.png` と書くと、そのままサンプルとして扱えます。
- いまはサンプルページ内で使っていますが、同じクラスを使えば各ドキュメント末尾に著者カードを置けます。
- 自動化したい場合は、次に frontmatter の `author` / `avatar` を読んで表示するテーマ拡張にできます。
