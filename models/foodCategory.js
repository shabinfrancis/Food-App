const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        url: String,
        filename: String
    },
    options: {
        regular: {
            type: Number
        },
        medium: {
            type: Number
        },
        large: {
            type: Number
        }
    }
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;