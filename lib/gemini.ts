import { GoogleGenAI } from "@google/genai";

const api_key = process.env.GEMINI_API_KEY;

const ai = api_key ? new GoogleGenAI({ apiKey: api_key }) : null;
export default ai;