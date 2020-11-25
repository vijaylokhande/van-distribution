 module.exports.db = Object.freeze({
    DB_USER_NAME:'postgres',
    DB_USER_PASSWORD:'root',
    DB_DATABASE_NAME:'VAN_DB',
    DB_HOST_NAME:'localhost',
    DB_HOST_PORT:5432
});

module.exports.url = Object.freeze({

    INDEX_CONTROLLER:'/',
    USER_CONTROLLER:'/api/user',
    PRODUCT_CONTROLLER:'/api/product',
    EMPLOYEE_CONTROLLER:'/api/employee',
    STOCK_CONTROLLER:'/api/stock', 
    APPCONFIG_CONTROLLER:'/api/appconfig',
    WAREHOUSE_CONTROLLER:'/api/warehouse',
    CUSTOMER_CONTROLLER:'/api/customer',
    VAN_CONTROLLER:'/api/van',
    SHIPMENT_CONTROLLER:'/api/shipment',
    WAREHOUSE_ENTRY_CONTROLLER:'/api/warehouse-entry',
    PRODUCT_SHIPMENT_CONTROLLER:'/api/product-shipment'

});