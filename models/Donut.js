
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for donuts collection in the database 
const donutsSchema = new Schema({
    base: String,
    glaze: String,
    name: String,
    company: String,
    user: String,
});

//model for donuts collection with schema donutsSchema
const Donut = mongoose.model('Donut', donutsSchema);

module.exports = Donut;