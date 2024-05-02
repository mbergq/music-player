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

