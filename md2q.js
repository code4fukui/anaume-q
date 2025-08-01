import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { md2json } from "https://code4fukui.github.io/md2json/md2json.js";
import { fetchQ } from "./fetchQ.js";

const extract1line = (s) => {
  return s;
  const n = s.indexOf("\n");
  if (n < 0) return s;
  return s.substring(0, n);
};

const removeLinks = (md) => {
  return md.replace(/\[([^\]]+)\]\(.*?\)/g, '$1');
};
const parseLink = (md) => {
  const r = md.match(/\[(.*?)\]\((.*?)\)/);
  if (!r) return null;
  return { title: r[1], link: r[2] };
};

const url = "https://code4fukui.github.io/next-course-of-study/words.md";
const txt = await fetchOrLoad(url);
//console.log(txt);
const json = md2json(txt);
//console.log(json);
const title = Object.keys(json)[0];
const list = json[title];
//const qs = Object.keys(list).map(i => i + "とは、" + extract1line(list[i].text) + "である");
const qs = Object.keys(list).filter(i => list[i].text).map(i => {
  const sentence = i + "とは、" + removeLinks(list[i].text) + "である";
  const { title, link } = parseLink(list[i]["出典"]);
  return { sentence, src_title: title, src_link: link };
});
console.log(qs, qs.length);

const quizset = [];
for (const q of qs) {
  const quiz = await fetchQ(q.sentence);
  quizset.push(quiz);
  quiz.src_title = q.src_title;
  quiz.src_link = q.src_link;
  console.log(quiz);
}
await Deno.writeTextFile("quiz_next-course-of-study.json", JSON.stringify(quizset, null, 2));
