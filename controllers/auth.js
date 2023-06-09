const User = require('../models/User');
const jwt = require('jsonwebtoken');
//const passport = require('../passport/passport');
const config = require('config');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({
        username: username
    });

    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        },config.get('jwt.secret'))

        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(err => {
        res.json({
            status: "error",
            message: err
        })
    });

};

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password)
        .then(result => {

            if (!result.user) {
                return res.json({
                    "status": "failed",
                    "message": "Username or password is incorrect"
                });

            }
            let token = jwt.sign({
                uid: result.user._id,
                username: result.user.username
            },config.get('jwt.secret'));


            return res.json({
                "status": "success",
                "data": {
                    "token": token
                }
            });
        }).catch(err => {
            res.json({
                status: "error",
                message: err
            });
        });
};

module.exports.signup = signup;
module.exports.login = login;