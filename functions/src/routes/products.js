const router = require("express");

const routers = router();

const productsController = require("../controllers/productsController");

routers.get("/", productsController.getAllProducts);
routers.get("/brand/:brand", productsController.getProductsByBrand);
routers.get("/:id", productsController.getProduct);
routers.post("/create", productsController.createProduct);
routers.put("/:id", productsController.updateProduct);
routers.delete("/:id", productsController.deleteProduct);

module.exports = routers;
