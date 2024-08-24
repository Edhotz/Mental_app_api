const GetSongs = require("../../application/use-cases/GetSongs");

class SongControler {
  static async all(req, res) {
    try {
      const getSongs = new GetSongs();
      const songs = await getSongs.execute();

      const result = res.status(200).json(songs);
      return result;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = SongControler;
