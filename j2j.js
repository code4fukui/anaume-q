const list = JSON.parse(await Deno.readTextFile("quiz_next-course-of-study_.json"));
const list2 = list.map(i => JSON.parse(i));
await Deno.writeTextFile("quiz_next-course-of-study.json", JSON.stringify(list2, null, 2));
