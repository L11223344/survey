
let mongoose = require('mongoose');

// Create a model class
let managementModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Name: String,
        ManagementRole: String
    },
    {
        collection: "Management"
    }
);

module.exports = mongoose.model('Management', managementModel);