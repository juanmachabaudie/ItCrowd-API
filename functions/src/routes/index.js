const router = require("express");

const productsRoute = require("./products");
const brandsRoute = require("./brands");

const routers = router();

routers.use("/products", productsRoute);
routers.use("/brands", brandsRoute);

module.exports = routers;
