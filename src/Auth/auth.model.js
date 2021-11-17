
let mongoose = require('mongoose');

// Create a model class
let userModel = mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        country: {
            type: String
        },
        success: {
            type: Boolean,
            default: false
        },
        phone: Number
    },
    {
        collection: "User"
    }
);

module.exports = mongoose.model('User', userModel);