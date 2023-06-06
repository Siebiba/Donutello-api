
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

// add update use async/await or promises if async functions

const update = (req, res) => {
    Donut.findByIdAndUpdate(req.params.id).exec()
        .then((donut) => {
            donut.base = req.body.base;
            donut.glaze = req.body.glaze;
            donut.name = req.body.name;
            donut.company = req.body.company;
            return donut.save();
        })
        .then((donut) => {
            res.json(donut);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}


//get Donut by id
const getById = (req, res) => {
    Donut.findById(req.params.id).exec()
        .then((donut) => {
            res.json(donut);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

const remove = (req, res) => {
    Donut.findByIdAndRemove(req.params.id).exec()
        .then(() => {
            res.json({
                status: "success",
                data: null
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}




module.exports.create = create;
module.exports.getAll = getAll;
module.exports.update = update;
module.exports.getById = getById;
module.exports.remove = remove;

