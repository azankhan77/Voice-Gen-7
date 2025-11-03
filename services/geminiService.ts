
import { GoogleGenAI, Modality } from "@google/genai";
import type { Voice } from '../types.ts';

let ai: GoogleGenAI | null = null;

const getAi = () => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};


export const generateSpeech = async (text: string, voice: Voice): Promise<string> => {
    try {
        const genAI = getAi();
        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: voice },
                    },
                },
            },
        });

        const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

        if (typeof audioData !== 'string') {
            throw new Error("No audio data received from API.");
        }
        return audioData; // This is the base64 encoded string
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error;
    }
};