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

exports.getAllPlaylists = async (req, res) => {
  let sql = "SELECT * FROM playlist";

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

exports.createPlaylist = async (req, res) => {
  let sql = "INSERT INTO playlist () VALUES (playlistName = ?)";
  const { playlistNAame } = req.body;

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.status(201).json({ id: results.insertId, ...req.body });
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
