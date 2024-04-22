const favoritesModel = require("../models/favoritesModel");
const FavoritesModel = require("../models/favoritesModel")

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

//Add new favorite POST/CREATE
exports.addNewFavorite = async (req, res) => {
    const { favoriteid, favorite, description} = req.body;
    try {
        const newFavorite = new FavoritesModel({
            favoriteId: favoriteid,
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




// Update boolean favorite
exports.updateFavorite = (async(req, res) => {
    const { favoriteid, favorite } = req.params;

    try {
        await FavoritesModel.updateOne({favoriteId: favoriteid}, {
            favorite: favorite,

        });
        const updateFavorite = await FavoritesModel.find({favoriteId: favoriteid});
        return res.status(200).json(updateFavorite);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});


// Delete
exports.deleteFavorite = (async(req, res) => {
    const { favoriteid } = req.params;
    try {
        const deletedFavorite = await favoritesModel.deleteOne({favoriteId: favoriteid});
        return res.status(200).json(deletedFavorite)
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

// Delete on _id
exports.deleteFavoriteById = (async( req, res ) => {
    const { id } = req.body;
    try {
        const deletedFavorite = await FavoritesModel.findByIdAndDelete(id);
        return res.status(200).json(deletedFavorite);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});
