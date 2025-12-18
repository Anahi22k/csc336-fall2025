import { GoogleGenAI } from "@google/genai";

const api = new GoogleGenAI({
    apikey: "" // anything that has these passwords has to be on server not frontend 

});

async function generateText(prompt) {
    const response = await api.models.generateText({
        model: "gemni-2.5.-flash",
        contents: prompt
    });
    return response.text;
}
let prompt = "Give me a list of 10 uninteresting things"
let llmText = await generateText(prompt);
console.log(llmText)

//databases worst look up time O^n -> they want to make that as smalls as possible
MongoDB password: 2of0iD91uD4T4SeG
make new cluster /Users/kimberlygaldamez/Desktop/csc336-fall2025/InClassNotes/llm-demos.js
/Users/kimberlygaldamez/Desktop/csc336-fall2025/01-html-basics
