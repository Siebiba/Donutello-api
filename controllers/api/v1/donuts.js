
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for donuts collection in the database 
const donutsSchema = new Schema({
    text: String,
    user: String,
    complete: Boolean
});

//model for donuts collection with schema donutsSchema
const Donut = mongoose.model('Donut', donutsSchema);

const getAll = (req, res) => {
    res.json({
        "status": 'You are riding the donut API!'
    });
}


const create = (req, res) => {
    res.json({
        "status": 'You are riding the donut API!'
    });
}


module.exports.getAll = getAll;
module.exports.create = create;