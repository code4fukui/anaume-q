# anaume-q

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

anaume-q is a tool that automatically generates fill-in-the-blank questions using the OpenAI API. It removes important words from the specified text, and generates the correct answer, incorrect answer choices, and explanations for each.

## Requirements
- Deno environment
- OpenAI API key

## Usage
1. Set the OpenAI API key in the `.env` file:
```
OPENAI_API_KEY=xxxxx
```
2. Run the script to generate fill-in-the-blank questions:
```sh
deno run -A https://code4fukui.github.io/anaume-q/fetchQ.js "The educational plan of a school is organized comprehensively in relation to the development of children's mind and body, and the number of class hours."
```

## Reference
- [openai.js](https://github.com/code4fukui/ai_chat/blob/main/openai.js) from [ai_chat](https://github.com/code4fukui/ai_chat/)

## License
MIT License