const router = require("express");

const routers = router();

const brandsController = require("../controllers/brandsController");

routers.get("/", brandsController.getBrands);
routers.post("/", brandsController.createBrand);

module.exports = routers;
