const connectionMySQL = require("../connectionMySQL");

exports.getAllTracks = async (req, res) => {
  let sql = "SELECT * FROM track";

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAllAlbums = async (req, res) => {
  let sql = "SELECT * FROM album";

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAlbumTracks = async (req, res) => {
  let sql = "SELECT * from albumTracks";

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getPlaylists = async (req, res) => {
  let sql = "SELECT * from playlist";

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deletePlaylist = async (req, res) => {
  const { playlistId } = req.body;

  let sql = "CALL delete_playlist(?)";

  try {
    await connectionMySQL.query(sql, [playlistId], (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createPlaylist = async (req, res) => {
  const { playlistName } = req.body;
  let sql = `INSERT INTO playlist (playlistName) VALUES ('${playlistName}')`;

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.status(201).json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

