const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.get('/api/favorite', favoritesController.getAll)
router.post('/api/favorite/', favoritesController.addNewFavorite);
router.put('/api/favorite/:favoriteid/:favorite', favoritesController.updateFavorite);
router.delete('/api/favorite/:favoriteid', favoritesController.deleteFavorite)
router.delete('/api/favorite-byid/', favoritesController.deleteFavoriteById);

module.exports = router;
