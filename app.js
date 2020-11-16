var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user-controller');
var productRouter = require('./routes/product-controller');
var employeeRouter = require('./routes/employee-controller');
var stockRouter = require('./routes/stock-controller');
var appconfigRouter = require('./routes/appconfig-controller');
var warehouseRouter = require('./routes/warehouse-controller');
var customerRouter = require('./routes/customer-controller');
var vanRouter = require('./routes/van-controller');
var shipmentRouter = require('./routes/shipment-controller');

var app = express();

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/stock', stockRouter);
app.use('/api/appconfig', appconfigRouter);
app.use('/api/warehouse', warehouseRouter);
app.use('/api/customer', customerRouter);
app.use('/api/van', vanRouter);
app.use('/api/shipment', shipmentRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
