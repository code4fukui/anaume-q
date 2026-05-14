# anaume-q

anaume-qは、OpenAI APIを使用して穴埋め問題を自動生成するツールです。指定された文章から重要な語句を抜き出して空欄にし、正解、誤答の選択肢、およびそれぞれの解説を生成します。

## 必要条件
- Deno環境
- OpenAI APIキー

## 使い方
1. `.env`ファイルにOpenAI APIキーを設定します:
```
OPENAI_API_KEY=xxxxx
```
2. 穴埋め問題を生成するスクリプトを実行します:
```sh
deno run -A https://code4fukui.github.io/anaume-q/fetchQ.js "The educational plan of a school is organized comprehensively in relation to the development of children's mind and body, and the number of class hours."
```

## 参考
- [ai_chat](https://github.com/code4fukui/ai_chat/) の [openai.js](https://github.com/code4fukui/ai_chat/blob/main/openai.js)

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
