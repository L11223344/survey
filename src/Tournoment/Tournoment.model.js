
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Name: String,
        TournomentDate: String
    },
    {
        collection: "Tournoment"
    }
);

module.exports = mongoose.model('Tournoment', bookModel);