
const Donut = require('../../../models/Donut');


// add create use async/await 
const create = (req, res) => {

    console.log(req.body);

    let donut = new Donut();
    donut.user = req.user._id;

    donut.base = req.body.base;
    donut.glaze = req.body.glaze;

    donut.name = req.body.name;
    donut.company = req.body.company;
    
    donut.save()
        .then((donut) => {
            res.json({
                status: "success",
                data: donut
            });
        }
        )
        .catch((err) => {
            res.status(500).json(err);
        }
        );
    
}



// add const getAll use async/await or promises if async functions
const getAll = (req, res) => {
    Donut.find().exec()
        .then((donuts) => {
            res.json(donuts);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}



module.exports.create = create;
module.exports.getAll = getAll;
