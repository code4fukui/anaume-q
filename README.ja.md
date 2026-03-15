# anaume-q

anaume-qは、OpenAIのAPIを使って穴埋め問題を自動生成するツールです。指定の文章から重要な語句を削除し、正解と誤答選択肢、それぞれの説明を生成します。

## デモ
Deno環境でコマンド1行で実行できます:

```sh
deno run -A https://code4fukui.github.io/anaume-q/fetchQ.js "学校教育の目的や目標を達成するために、教育の内容を子供の心身の発達に応じ、授業時数との関連において総合的に組織した学校の教育計画"
```

## 機能
- 指定の文章から穴埋め問題を自動生成
- 正解と誤答選択肢、それぞれの説明を出力
- 問題集を自動生成してJSON形式で出力

## 必要環境
- Deno環境
- OpenAIのAPIキー

## 使い方
1. OpenAIのAPIキーを`.env`ファイルに設定します。
```
OPENAI_API_KEY=xxxxx
```
2. 以下のコマンドを実行します。
```
deno run -A https://code4fukui.github.io/anaume-q/fetchQ.js "学校教育の目的や目標を達成するために、教育の内容を子供の心身の発達に応じ、授業時数との関連において総合的に組織した学校の教育計画"
```

## ライセンス
MITライセンス