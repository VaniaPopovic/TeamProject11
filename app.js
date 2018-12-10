var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var book = require('./routes/puzzle');
var auth = require('./routes/auth');
var crosswords = require('./routes/crosswordsRoute');
var wordFind = require('./routes/wordFindRoute');
var Scrabble = require('./routes/scrabbleRoute');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/puzzle', book);
app.use('/api/auth', auth);
app.use('/api/crosswords', crosswords);
app.use('/api/wordFind', wordFind);
app.use('/api/Scrabble', Scrabble);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.json({
    message: err.message,
    error: err
  });
});

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://localhost/mern-secure', { promiseLibrary: require('bluebird') })
//use mongodb atlas database
mongoose.connect('mongodb+srv://admin:6670517@cluster0-oaiei.gcp.mongodb.net/WordGame', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Database connection successful!!!!!!'))
  .catch((err) => console.error(err));

module.exports = app;
