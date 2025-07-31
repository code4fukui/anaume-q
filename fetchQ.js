import { fetchChat } from "./fetchChat.js";

const getPrompt = (body) => {
  const prompt_q = `以下の手順に従って、指定の文章から穴埋め問題を1問作成し、指定のJSON形式で出力してください。

【入力】
文章：
「${body}」

【手順】
1. 文章から重要な語句を1つ選んで空欄（＿＿＿）にし、穴埋め問題を作成してください。
2. 空欄に入る正解（正答）と、もっともらしい誤答を5つ挙げてください。
3. 各選択肢に対して、正解または不正解の理由を簡潔に記述してください。

【出力フォーマット】
以下のJSON形式で出力してください。

\`\`\`json
{
  "question": "学校教育の目的や目標を達成するために、教育の内容を子供の心身の発達に応じ、授業時数との関連において＿＿＿に組織した学校の教育計画",
  "correct_answer": "総合的",
  "choices": [
    {
      "text": "総合的",
      "explanation": "教育内容を全体として体系的にまとめるという意味で正しい。"
    },
    {
      "text": "断片的",
      "explanation": "内容がバラバラになっており、教育計画として不適切。"
    },
    {
      "text": "無計画",
      "explanation": "教育計画という語に反しており、明確に不正解。"
    },
    {
      "text": "即興的",
      "explanation": "即席で行う意味を含み、教育計画の文脈に合わない。"
    },
    {
      "text": "部分的",
      "explanation": "一部だけを対象にする語であり、全体を扱う文脈と合わない。"
    },
    {
      "text": "限定的",
      "explanation": "制限された範囲という意味で、教育の幅広さを損なうため不適切。"
    }
  ]
}
\`\`\`
`;
  return prompt_q;
};

export const fetchQ = async (text) => {
  const prompt = getPrompt(text);
  return await fetchChat(prompt, "json");
};

if (import.meta.main) {
  const body = Deno.args[0] || "学校教育の目的や目標を達成するために、教育の内容を子供の心身の発達に応じ、授業時数との関連において総合的に組織した学校の教育計画";
  console.log("fetchQ: " + body);
  const json = await fetchQ(body);
  console.log(json);
}
