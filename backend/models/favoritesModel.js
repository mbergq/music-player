const mongoose = require("mongoose");

const FavoritesSchema = new mongoose.Schema({
    favoriteId:{
        type: Number,
        require: true,
        // unique: true,
    },
    favorite:{
        type: Boolean,
        require:true,
    },
    description:{
        type: String,
    },
    date:{
        type: String,
    }
})

module.exports = mongoose.model("favorite", FavoritesSchema)
