const Meditation = require("../../domain/entities/Meditation");
const UseCaseInterface = require("../interfaces/UseCAseInterface");

class GetAdviceByMood extends UseCaseInterface {
  constructor(quoteRepoisitory) {
    super();
    this.quoteRepoisitory = quoteRepoisitory;
  }

  async execute(mood) {
    const quoteData = await this.quoteRepoisitory.getAdviceByMood(mood);
    return new Meditation({ text: quoteData });
  }
}

module.exports = GetAdviceByMood;
