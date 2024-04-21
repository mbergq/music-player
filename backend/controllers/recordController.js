const connectionMySQL = require("../connectionMySQL");

exports.getRecords = async (req, res) => {
  let sql = "SELECT * FROM records";

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
