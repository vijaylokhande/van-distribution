var createError = require('http-errors');
var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db=require('./model/db');
var url=require('./constant/constants').url;



const bodyParser = require('body-parser');
const errorHandler = require('./_helpers/error-handler');

/* db connection */
db.dbConnect();

/* COntrollers */
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
var shipmentActionRouter = require('./routes/shipment-action-controller');
var warehouseActionRouter = require('./routes/warehouse-action-controller');

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


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// controller mapping
app.use(url.INDEX_CONTROLLER, indexRouter);
app.use(url.USER_CONTROLLER, userRouter);
app.use(url.PRODUCT_CONTROLLER, productRouter);
app.use(url.EMPLOYEE_CONTROLLER, employeeRouter);
app.use(url.STOCK_CONTROLLER, stockRouter);
app.use(url.APPCONFIG_CONTROLLER, appconfigRouter);
app.use(url.WAREHOUSE_CONTROLLER, warehouseRouter);
app.use(url.CUSTOMER_CONTROLLER, customerRouter);
app.use(url.VAN_CONTROLLER, vanRouter);
app.use(url.SHIPMENT_CONTROLLER, shipmentRouter);
app.use(url.WAREHOUSE_ENTRY_CONTROLLER, warehouseActionRouter);
app.use(url.PRODUCT_SHIPMENT_CONTROLLER, shipmentActionRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler)

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
