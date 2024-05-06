const express = require('express');
const router = express.Router();
const kajsaController = require('../controllers/kajsaController');

router.get('/api/tracksDetails', kajsaController.getAllTrackDetails)

router.get("/api/tracks", kajsaController.getAllTracks);


module.exports = router;
