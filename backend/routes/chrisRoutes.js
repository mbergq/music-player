const express = require("express");
const router = express.Router();

const chrisController = require("../controllers/chrisController");

router.get("/api/tracks", chrisController.getAllTracks);
router.get("/api/playlists", chrisController.getAllPlaylists);

module.exports = router;
