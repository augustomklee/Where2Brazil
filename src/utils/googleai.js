import { GoogleGenerativeAI } from '@google/generative-ai';
import { FALLBACK_DESTINATIONS } from '../constants/index.js';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export async function createChatCompletion(messages) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
        responseMimeType: "application/json",
      }
    });

    // Use Gemini chat format directly
    const chat = model.startChat({
      history: messages.slice(0, -1)
    });

    console.log('Sending message to Google AI:', messages.slice(0, -1));
    console.log('Last message:', messages[messages.length - 1]);

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.parts[0].text);
    return result.response.text();
  } catch (error) {
    console.error('Google AI API Error:', error);
    throw error;
  }
}

export function formatTravelRecommendations(jsonText) {
  try {
    // Clean the response in case it has markdown formatting or extra text
    let cleanedJson = jsonText.trim();

    // Remove potential markdown code blocks
    if (cleanedJson.startsWith('```json')) {
      cleanedJson = cleanedJson.replace(/```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanedJson.startsWith('```')) {
      cleanedJson = cleanedJson.replace(/```\s*/, '').replace(/\s*```$/, '');
    }

    const data = JSON.parse(cleanedJson);

    // Validate the structure
    if (!data || !data.destinations || !Array.isArray(data.destinations)) {
      throw new Error('Invalid JSON structure: missing destinations array');
    }

    if (data.destinations.length === 0) {
      throw new Error('No destinations found in response');
    }

    // Validate each destination
    const validatedDestinations = data.destinations.map((dest, index) => {
      if (!dest.title || !dest.description) {
        throw new Error(`Destination ${index + 1} missing required fields`);
      }
      return {
        id: index + 1,
        title: String(dest.title).trim(),
        description: String(dest.description).trim()
      };
    });

    return validatedDestinations;

  } catch (error) {
    console.error('JSON parsing/validation error:', error);
    console.error('Raw response:', jsonText);

    // Return fallback recommendations
    return FALLBACK_DESTINATIONS;
  }
}

export default genAI;