 var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

// load the env 
require('dotenv').config()
require('./config/passport')

var app = express();
// connect to the MongoDB with mongoose
require('./config/database')

//ROUTES REQUIRED
var indexRouter = require('./routes/index');
var designersRouter = require('./routes/designers');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// FROM DAY 5 ADDED MIDDLE WEAR
app.use(cookieParser())
app.use(
  session({
    secret: 'SEI-DT-69-Rocks!',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())


// MOUNT ROUTERS
app.use('/', indexRouter);
app.use('/designers', designersRouter);

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
