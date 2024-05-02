const express = require("express");
const router = express.Router();

const musicController = require("../controllers/musicController");

router.get("/api/tracks", musicController.getAllTracks);
router.get("/api/albums", musicController.getAllAlbums);
router.get("/api/albumtracks", musicController.getAlbumTracks);
router.get("/api/playlists", musicController.getPlaylists);
router.post("/api/playlists", musicController.createPlaylist);
router.delete("/api/playlists", musicController.deletePlaylist);

module.exports = router;
