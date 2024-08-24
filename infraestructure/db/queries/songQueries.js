const db = require("..");

const getAllSongs = async () => {
  const result = await db.query("SELECT * FROM songs");
  console.log(result.rows);
  return result.rows;
};

const createTable = async () => {
  const result = await db.query(
    "CREATE TABLE IF NOT EXISTS songs(id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(255), song_link VARCHAR(255))"
  );
  console.log(result.rows);
  return result.rows;
};

const createSong = async () => {
  const result = await db.query(
    "INSERT INTO songs(title, author, song_link) VALUES($1, $2, $3)",
    [
      "Clint Easthood",
      "Gorillaz",
      "https://firebasestorage.googleapis.com/v0/b/music-studycase-app.appspot.com/o/songs%2FGorillaz%20-%20Clint%20Eastwood.mp3?alt=media&token=53bac5cb-8e7c-40ed-91ff-26e9df75895a",
    ]
  );
  console.log(result.rows);
  return result.rows;
};

const createManySongs = async () => {
  const result = await db.query(
    "INSERT INTO songs(title, author, song_link) VALUES($1, $2, $3)",
    [
      "I Want To Hold Your Hand",
      "The Beatles",
      "https://www.youtube.com/watch?v=QGwXkRk5Yd0",
    ],
    ["ThunderStruck", "AC/DC", "https://www.youtube.com/watch?v=QGwXkRk5Yd0"],
    [
      "I Want To Hold Your Hand",
      "The Beatles",
      "https://www.youtube.com/watch?v=QGwXkRk5Yd0",
    ],
    [
      "Smell of an Embarrassment",
      "The Beatles",
      "https://www.youtube.com/watch?v=QGwXkRk5Yd0",
    ]
  );
  console.log(result.rows);
  return result.rows;
};

createSong();
module.exports = { getAllSongs, createTable, createSong };
