const FavoritesModel = require("../models/favoritesModel");

exports.getAll = (async(req, res) => {
    try {
        const allFavorites = await FavoritesModel.find();
        return res.status(200).json(allFavorites);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.getAllFavorites = (async (req, res) => {
    const { isTrue } = req.params;
    try{
        const isFavorite = await FavoritesModel.find({favorite: isTrue});
        return res.status(200).json(isFavorite)
    }
    catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const isTrue = await FavoritesModel.find({ favoriteId: id });
        return res.status(200).json(isTrue);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

//Add new favorite POST/CREATE
exports.addNewFavorite = async (req, res) => {
    const { favoriteId, favorite, description} = req.body;
    try {
        const newFavorite = new FavoritesModel({
            favoriteId: favoriteId,
            favorite: favorite,
            description: description,
            date: new Date()
        });
        const insertFavorite = await newFavorite.save();
        return res.status(201).json(insertFavorite);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};


// Update Change boolean
exports.updateFavorite = async (req, res) => {
    const { favoriteId, favorite } = req.body;

    try {
        await FavoritesModel.updateOne({ favoriteId: favoriteId }, {
            favorite: favorite
        });
        const updateFavorite = await FavoritesModel.find({ favoriteId: favoriteId });
        return res.status(200).json(updateFavorite);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

// Delete
exports.deleteFavorite = (async(req, res) => {
    const { favoriteid } = req.params;
    try {
        const deletedFavorite = await FavoritesModel.deleteOne({favoriteId: favoriteid});
        return res.status(200).json(deletedFavorite)
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

// Delete on _id
exports.deleteFavoriteById = async (req, res) => {
    const { id } = req.body;
    try {
        const deletedFavoriteId = await FavoritesModel.findByIdAndDelete(id);
        return res.status(200).json(deletedFavoriteId);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};
