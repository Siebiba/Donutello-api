const passport = require('passport');
const User = require('../models/User');


//new strategy for local login
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//new strategy for jwt (webtoken)
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Secret';


passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({
        _id: jwt_payload.uid
    }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));