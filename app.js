const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Food = require('./models/foodCategory.js');
const { default: Login } = require('./src/pages/Login.jsx');

app.get("/", (req, res) => {
    console.log("Root is listening");
    res.send("ROOT");
})

app.get("/login", (req, res) => {
    console.log("Login listening");
    res.render("Login.jsx");
})

app.listen("5173", () => {
    console.log("App listening to port 5173");
})