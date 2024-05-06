const express = require("express");
const router = express.Router();

const chrisController = require("../controllers/chrisController");

router.get("/api/tracks", chrisController.getAllTracks);
router.get("/api/playlists", chrisController.getAllPlaylists);
router.get("/api/playlist/:playlistName", chrisController.getPlaylist);
router.get("/api/albums", chrisController.getAllAlbums);
router.post("/api/playlists", chrisController.createPlaylist);
router.post("/api/playlist", chrisController.addTrackToPlaylist);
router.delete("/api/playlist", chrisController.deletePlaylist);
router.put("/api/playlist/:_playlistName", chrisController.updatePlaylistName);

module.exports = router;
