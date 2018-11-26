var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var sd = require('silly-datetime');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRoutes');
var goodsRoutes = require('./routes/goodsRoutes')

var app = express();
var loggerMiddleware = function(req, res, next) {
  console.log('      ')
  console.log('*****'+sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')+'******')
  console.log('[USER]', req.headers['user-agent'])
  console.log('[IP]',req.connection.remoteAddress)
  console.log('      ')
  next()
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(loggerMiddleware)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'asdfsadsdf',
  resave: false,
  saveUninitialized: true,
  // cookie: {maxAge: 14*24*60*60*1000} // 14 天
}));
app.use(express.static(path.join(__dirname, 'public/build')));

app.use(function(req, res, next) {
  var urls = ['/goods/queryAll', '/users/logs']
  if (urls.includes(req.url)) {
    next();
    return
  }
  if (req.url === '/users/login') {
    if (req.session && req.session.user) {
      res.json({status:2,data:{url:'home'}})
    } else {
      next();
    }
    return;
  }
  if (req.session && req.session.user) {
    next();
  } else {
    // next();
    res.json({status:2,data:{url:'login'}})
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods',goodsRoutes)

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
