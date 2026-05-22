import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askFitnessAI(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are Aura AI, a futuristic fitness assistant for Aura Fitness Bhilwara. Be concise, professional, motivating, and strictly focused on fitness, gym queries, and Aura Fitness. Membership prices: Essential (1,999 INR/mo), Apex (3,999 INR/mo), Elysium (9,999 INR/mo). Trainers: Vikram, Aditi, Aryan. Access: 24/7.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Biological glitch in AI circuits. Try again soon.";
  }
}
