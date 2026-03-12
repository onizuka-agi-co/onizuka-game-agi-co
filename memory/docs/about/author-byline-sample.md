---
title: Author Byline Sample
---

# Author Byline Sample

記事の執筆者表示として使いやすい、控えめな byline サンプルです。

## Preview

<div class="author-byline">
  <img class="author-byline-avatar" src="./cat2.png" alt="Cat author avatar">
  <div class="author-byline-body">
    <p class="author-byline-name">Captain Cat</p>
    <p class="author-byline-meta">Written by Captain Cat · Documentation Author · Updated 2026-03-12</p>
  </div>
</div>

このくらいの密度なら、ページ冒頭や記事末尾に置いても主張が強すぎません。

## Example Markup

```html
<div class="author-byline">
  <img class="author-byline-avatar" src="./cat2.png" alt="Cat author avatar">
  <div class="author-byline-body">
    <p class="author-byline-name">Captain Cat</p>
    <p class="author-byline-meta">Written by Captain Cat · Documentation Author · Updated 2026-03-12</p>
  </div>
</div>
```

## Notes

- 著者カードよりも説明量を減らして、本文の邪魔をしない見た目にしています。
- サムネイルを 40px にしているので、記事ページのタイトル直下にも置きやすいです。
- 必要なら次に frontmatter の `author` / `avatar` / `updatedAt` から自動表示する形にもできます。
