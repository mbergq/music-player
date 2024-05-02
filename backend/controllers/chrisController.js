const connectionMySQL = require("../connectionMySQL");

exports.getAllTracks = async (req, res) => {
  let sql = "SELECT * FROM getMusic";

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
  const { playlistName } = req.body;
  let sql = `INSERT INTO playlist (playlistName) VALUES (?)`;

  try {
    await connectionMySQL.query(
      sql,
      [playlistName],
      (error, results, fields) => {
        if (error) throw error;
        res.status(201).json(results);
      }
    );
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getPlaylist = async (req, res) => {
  const { playlistName } = req.params;

  let sql = `CALL get_playlistTracks(?)`;

  try {
    await connectionMySQL.query(
      sql,
      [playlistName],
      (error, results, fields) => {
        if (error) throw error;
        res.json(results);
        console.log(results);
      }
    );
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// with prepered statement
exports.deletePlaylist = async (req, res) => {
  const { playlistId } = req.body;

  let sql = `CALL delete_playlist(?)`;

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

// exports.updatePlaylistName = async (req, res) => {
//   const { oldPlaylistName } = req.params;
//   const { playlistName } = req.body;

//   let sql = `UPDATE playlist SET playlist.playlistName = '${playlistName}'
//   WHERE playlist.playlistTitle = '${oldPlaylistName}';`;

//   try {
//     await connectionMySQL.query(
//       sql,
//       [playlistName],
//       (error, results, fields) => {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     });
//   }
// };

exports.updatePlaylistName = (req, res) => {
  const { _playlistName } = req.params;
  const { playlistName } = req.body;

  console.log(playlistName);
  console.log(_playlistName);

  let sql = `UPDATE playlist SET playlist.playlistName = ? WHERE playlist.playlistName = ?`;

  connectionMySQL.query(
    sql,
    [playlistName, _playlistName],
    (error, results, fields) => {
      if (error) {
        return res.status(500).json({
          error: error.message,
        });
      }
      res.json(results);
    }
  );
};

exports.addTrackToPlaylist = async (req, res) => {
  const { trackPlaylistT_id } = req.body;
  const { trackPlaylistP_id } = req.body;

  let sql = `CALL add_track_to_playlist(?, ?)`;

  try {
    await connectionMySQL.query(
      sql,
      [trackPlaylistP_id, trackPlaylistT_id],
      (error, results, fields) => {
        if (error) throw error;
        res.json(results);
      }
    );
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
