
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for donuts collection in the database 
const donutsSchema = new Schema({
    text: {
        type:String
    },

    user: String,
    completed: Boolean
   
});

//model for donuts collection with schema donutsSchema
const Donut = mongoose.model('Donut', donutsSchema);

module.exports = Donut;