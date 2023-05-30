const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//add cors to the project so that the front end can talk to the back end
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//load the donuts router
const apiDonutsRouter  = require('./routes/api/v1/donuts');
//load passport
const passport = require('./passport/passport'); 

//add mongoose to the project and connect to the database 
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

//on express json parce the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add cors to the project so that the front end can talk to the back 
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
//load the donuts router
app.use('/api/v1/donuts', passport.authenticate('jwt', { session: false }), apiDonutsRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
