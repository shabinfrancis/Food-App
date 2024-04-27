const mongoose  = require('mongoose');
const initData = require('./data.js');
const Food = require('../models/foodCategory.js');

const MONGO_URL = 'mongodb://127.0.0.1:27017/FoodVillage';

main()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err)
  });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Food.insertMany(initData.data);
    console.log("Data initialized");
}

initDB();