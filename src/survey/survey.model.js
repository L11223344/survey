
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Name: String,
        SurveyDate: String
    },
    {
        collection: "Survey"
    }
);

module.exports = mongoose.model('Survey', bookModel);