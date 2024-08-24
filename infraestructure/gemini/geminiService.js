const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuoteRepository = require("../../application/interfaces/QuoteRepository");

const genAiGoogle = new GoogleGenerativeAI(
  "AIzaSyAXh68Zbwli8Ex8aORLs2__lMuskD3830Q"
);

const model = genAiGoogle.getGenerativeModel({
  model: "gemini-1.5-pro",
});

class GeminiService extends QuoteRepository {
  async getAdviceByMood(mood) {
    const prompt = `Given the current mood of the user, provide an appropriate meditation advice or mental health exercise. The possible moods are happy, sad, and angry, and the response should be in json format.
    {
    "advice": "specific advice or exercise based on the user mood",
    }

    For example, if the user's mood is "happy", the response should be:

    {
        So the mood is: ${mood}
    }
    return the json only without using keyboard json
    `;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }

  async getDailyQuotes() {
    const prompt = `Please provide inspiracional quotes for meditation, one for each part of the day: morning, noon, and evening, Return the response in json format with the following structure:
    {
    "morningQuote": "your morninng quote here",
    "noonQuote": "your noon quote here",
    "evening": "your evening quote here",
    }
    return the json only without using keyboard json`;
    const result = await model.generateContent(prompt);
    const response = result.response;

    return response;
  }
}
module.exports = GeminiService;
