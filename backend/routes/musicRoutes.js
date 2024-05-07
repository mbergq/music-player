const express = require("express");
const router = express.Router();

const musicController = require("../controllers/musicController");
const chrisController = require("../controllers/chrisController");
// const favoritesController = require("../controllers/favoritesController");
// const kajsaController = require("../controllers/kajsaController");

// router.get("/api/tracks", musicController.getAllTracks);
// router.get("/api/albums", musicController.getAllAlbums);
router.get("/api/albumtracks", musicController.getAlbumTracks);
// router.get("/api/playlists", musicController.getPlaylists);
// router.post("/api/playlists", musicController.createPlaylist);
// router.delete("/api/playlists", musicController.deletePlaylist);
//////////// playlist Routes //////////////
router.get("/api/tracks", chrisController.getAllTracks);
router.get("/api/playlists", chrisController.getAllPlaylists);
router.get("/api/playlist/:playlistName", chrisController.getPlaylist);
router.get("/api/albums/:albumTitle", chrisController.getAlbum);
router.get("/api/albums", chrisController.getAllAlbums);
router.post("/api/playlists", chrisController.createPlaylist);
router.post("/api/playlist", chrisController.addTrackToPlaylist);
router.delete("/api/playlist", chrisController.deletePlaylist);
router.put("/api/playlist/:_playlistName", chrisController.updatePlaylistName);
//////////// favorites Routes //////////////
// router.get("/api/favorite", favoritesController.getAll);
// router.get("/api/favorite/:isTrue", favoritesController.getAllFavorites);
// router.post("/api/favorite/", favoritesController.addNewFavorite);
// router.put(
//   "/api/favorite/:favoriteid/:favorite",
//   favoritesController.updateFavorite
// );
// router.delete("/api/favorite/:favoriteid", favoritesController.deleteFavorite);
// router.delete("/api/favorite-byid/", favoritesController.deleteFavoriteById);
//////////// kajsa Routes //////////////
// router.get("/api/tracksDetails", kajsaController.getAllTrackDetails);
// router.get("/api/tracks", kajsaController.getAllTracks);

module.exports = router;
