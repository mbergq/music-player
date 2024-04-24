const express = require("express");
const router = express.Router();

const musicController = require("../controllers/musicController");

router.get("/api/tracks", musicController.getAllTracks);

module.exports = router;
