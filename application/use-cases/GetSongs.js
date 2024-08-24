const Song = require("../../domain/entities/Song");
const { getAllSongs } = require("../../infraestructure/db/queries/songQueries");
const UseCaseInterface = require("../interfaces/UseCAseInterface");

class GetSongs extends UseCaseInterface {
  async execute() {
    const songRows = await getAllSongs();

    return songRows;
  }
}

module.exports = GetSongs;
