const GetAdviceByMood = require("../../application/use-cases/GetAdviceByMood");
const GetDailyQuotes = require("../../application/use-cases/GetDailyQuotes");
const GeminiService = require("../../infraestructure/gemini/geminiService");

class MeditationController {
  static async dailyQuote(req, res) {
    try {
      const quotesRepository = new GeminiService();
      const getDailyQuotes = new GetDailyQuotes(quotesRepository);

      const quotes = await getDailyQuotes.execute();
      res.status(200).json(quotes);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  }

  static async adviceByMood(req, res) {
    try {
      const { mood } = req.params;

      const quotesRepository = new GeminiService();
      const getAdviceByMood = new GetAdviceByMood(quotesRepository);

      const advice = await getAdviceByMood.execute(mood);
      res.status(200).json(advice);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  }
}

module.exports = MeditationController;
