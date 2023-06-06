const passport = require('passport');
const User = require('../models/User');
const config = require('config');


//new strategy for local login
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//new strategy for jwt (webtoken)
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = config.get('jwt.secret');

//create new jwt strategy with async function
passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    //find the user in db if needed
    const user = await User.findOne({
        _id: jwt_payload.uid
    });
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}));


module.exports = passport;