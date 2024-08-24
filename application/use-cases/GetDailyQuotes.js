const Meditation = require("../../domain/entities/Meditation");
const UseCaseInterface = require("../interfaces/UseCAseInterface");

class GetDailyQuotes extends UseCaseInterface {
  constructor(quotesRepository) {
    super();
    this.quotesRepository = quotesRepository;
  }

  async execute() {
    const quoteData = await this.quotesRepository.getDailyQuotes();
    return new Meditation({ text: quoteData });
  }
}

module.exports = GetDailyQuotes;
