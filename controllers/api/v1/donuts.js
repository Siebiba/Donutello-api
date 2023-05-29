
const Donut = require('../../../models/Donut');

// add const getAll use async/await or promises if async functions
const getAll = (req, res) => {
    res.json({
        message: 'Welcome to Donutello!',

    });
}


// add create use async/await 
const create = async (req, res) => {
    const donut = new Donut({
        text: req.body.text,
        user: req.body.user,
        completed: req.body.completed
    });
    try {
        const savedDonut = await donut.save();
        res.json(savedDonut);
    } catch (err) {
        res.status(400).json(err);
    }
}



module.exports.getAll = getAll;
module.exports.create = create;