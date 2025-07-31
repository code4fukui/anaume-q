import { fetchCompletions, log } from "https://code4fukui.github.io/ai_chat/openai.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";

export const extractCode = (s, type) => {
  const n = s.indexOf("```" + type + "\n");
  if (n < 0) return null;
  const m = s.indexOf("\n```\n", n + 8);
  if (m < 0) {
    if (!s.endsWith("\n```")) {
      return null;
    }
    return s.substring(n + 8, s.length - 4);
  }
  const s2 = s.substring(n + 8, m);
  return s2;
};

export const extractJSON = (s) => {
  return extractCode(s, "json");
};

export const fetchChat = async (prompt, type = null) => {
  const req = {
    //model: "gpt-3.5-turbo", // gpt-3.5-turbo and gpt-3.5-turbo-0301 are supported.
    //model: "gpt-4o-2024-11-20",
    model: "gpt-4.1",
    messages: [
      { "role": "user", "content": prompt },
    ],
  };
  //console.log(prompt);
  const res = await fetchCompletions(req);
  //console.log(res);
  const answer = res.error ? "error: " + res.error.message : res.choices[0].message.content;
  //const answer = res.choices[0].message.content;
  const dt = new DateTime();
  const data = { dt, prompt, answer };
  await log(dt, data);
  if (type) {
    const res = extractCode(answer, type);
    return res;
  }
  return answer;
};
