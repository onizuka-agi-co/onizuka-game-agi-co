# Planning Meeting Prompt

週次プランニング会議を開始します。

---

## サブエージェントの召喚

**必ず3人以上のサブエージェントを召喚し、多角的な視点で議論してください。**

### 推奨サブエージェント構成

| エージェント | 役割 | 視点 |
|-------------|------|------|
| Product Owner | プロダクト管理 | ユーザー価値、優先順位 |
| Tech Lead | 技術リード | 実装可能性、技術的負債 |
| Designer | デザイン | UX、UI、体験設計 |
| QA Engineer | 品質保証 | テスト、品質、バグ |

### 議論の進め方

1. 各エージェントに視点から意見を出させる
2. 異なる意見を整理・統合
3. 合意形成または意思決定を記録

---

## 会議記録の作成

**保存場所:** `D:\Prj\onizuka-game-agi-co\memory\docs\2026\MM\DD\meeting-XXX-planning.md`
- XXX は連番（その日の会議数に応じて）
- 同じ日の日報と同じフォルダに保存

---

## 会議記録フォーマット

```markdown
# Meeting XXX: 週次プランニング

- **日時:** YYYY-MM-DD HH:MM (JST)
- **参加者:** 人間, エージェント (Product Owner, Tech Lead, Designer, QA)
- **場所:** WebChat

## サブエージェント議論

### Product Owner の視点
- 

### Tech Lead の視点
- 

### Designer の視点
- 

### QA Engineer の視点
- 

## 先週の振り返り
- 完了したタスク
- 課題・問題点

## 今週の計画
- 優先タスク
- マイルストーン

## 決定事項
- 

## アクションアイテム
| タスク | 担当 | 状態 |
|--------|------|------|
| | | |

## 次回
- 次回の日程・議題
```

---

## 会議の流れ

1. **サブエージェント召喚** - 3人以上の視点で議論
2. **先週の振り返り** - 何ができたか、何が課題か
3. **今週の計画** - 何をするか、優先順位
4. **決定事項の記録** - DECISIONS.md にも反映
5. **アクションアイテム** - 誰が何をやるか
6. **記録の保存** - meeting-XXX-planning.md 作成
7. **日報更新** - index.md に会議リンク追加

---

## 参照ファイル

| ファイル | パス |
|---------|------|
| AGENTS.md | D:\Prj\onizuka-game-agi-co\AGENTS.md |
| PROJECTS.md | D:\Prj\onizuka-game-agi-co\PROJECTS.md |
| ROADMAP.md | D:\Prj\onizuka-game-agi-co\ROADMAP.md |
| DECISIONS.md | D:\Prj\onizuka-game-agi-co\DECISIONS.md |

---

_このファイルは planning-meeting cron から参照されます_
