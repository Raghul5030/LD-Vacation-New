import { GoogleGenAI } from "@google/genai";
import { GeneratedContent } from "../types";

const getClient = () => {
  if (!process.env.API_KEY) return null;
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateDestinationDetails = async (
  destinationName: string,
  stateName: string
): Promise<GeneratedContent> => {
  const ai = getClient();
  
  // Fallback content if no API key or error
  const fallback: GeneratedContent = {
    about: `Discover ${destinationName}, a gem of ${stateName}. This location offers a unique blend of culture and nature. Perfect for families and solo travelers alike.`,
    itinerary: `**Day 1:** Arrival and local sightseeing.\n**Day 2:** Visit major landmarks and temples.\n**Day 3:** Shopping and departure.`,
    bestTime: `The best time to visit ${destinationName} is between October and March when the weather is pleasant.`,
    howToReach: `**By Air:** Nearest airport is well connected.\n**By Train:** Regular trains available.\n**By Bus:** LD Vacation arranges luxury bus travel.`
  };

  if (!ai) return fallback;

  try {
    const prompt = `
      Act as a travel expert for "LD Vacation". Write a structured guide for ${destinationName} in ${stateName}.
      Return ONLY a JSON object with the following keys:
      - "about": A 2 paragraph intro about the destination (climate, vibes, who should visit).
      - "itinerary": A 3-day suggested itinerary plan (bullet points).
      - "bestTime": Best time to visit with weather details.
      - "howToReach": Brief details for Car, Bus, Train, and Flight.
      
      Do not use Markdown code blocks like \`\`\`json. Just raw JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) return fallback;
    return JSON.parse(text) as GeneratedContent;

  } catch (error) {
    console.error("Gemini generation error:", error);
    return fallback;
  }
};

export const generatePlaceDetails = async (
  placeName: string,
  destinationName: string
): Promise<GeneratedContent> => {
  const ai = getClient();
  const fallback: GeneratedContent = {
    placeDetails: `Experience the beauty of ${placeName}. One of the top attractions in ${destinationName}. A must-visit spot for nature and history lovers.`
  };

  if (!ai) return fallback;

  try {
    const prompt = `
      Write a short travel guide for specific place: ${placeName} located in ${destinationName}.
      Return ONLY a JSON object with one key: "placeDetails".
      The value should be a formatted string (using Markdown) covering:
      - Experience Highlight
      - Ideal Duration
      - Why Visit with LD Vacation
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });
     const text = response.text;
    if (!text) return fallback;
    return JSON.parse(text) as GeneratedContent;
  } catch (error) {
    return fallback;
  }
};