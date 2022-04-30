const { db } = require("../../firestore");
const admin = "admin";

const productsController = {
  createProduct: async (req, res) => {
    try {
      const { name, description, image, price, brand, password } = req.body;
      if (password === admin) {
        await db.collection("products").add({
          name,
          description,
          image,
          price,
          brand,
        });
        res.json({
          message: "Product created",
        });
      } else {
        res.json({ message: "Denied Access" });
      }
    } catch (error) {
      res.json({
        message: "Something went wrong",
      });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await db.collection("products").get();
      res.json({
        products: products.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        })),
      });
    } catch (error) {
      res.json({
        message: "Something went wrong",
      });
    }
  },

  getProductsByBrand: async (req, res) => {
    const { brand } = req.params;
    try {
      const byBrand = await db
        .collection("products")
        .where("brand", "==", brand)
        .get();
      res.json({
        products: byBrand.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        })),
      });
    } catch (error) {
      res.json({
        message: "Something went wrong",
      });
    }
  },

  getProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await db.collection("products").doc(id).get();
      res.json({
        product: { id: product.id, ...product.data() },
      });
    } catch (error) {
      res.json({
        message: "Something went wrong",
      });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price, brand, password } = req.body;
    try {
      if (password === admin) {
        await db.collection("products").doc(id).set(
          {
            name,
            description,
            image,
            price,
            brand,
          },
          { merge: true }
        );
        res.json({
          message: "Updated",
        });
      } else {
        res.json({ message: "Denied Access" });
      }
    } catch (error) {
      res.json({
        message: "Something went wrong",
      });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      if (req.headers.authorization === "admin") {
        await db.collection("products").doc(id).delete();
        res.json({
          message: "Product deleted",
        });
      } else {
        res.json({ message: "Denied Access" });
      }
    } catch (error) {
      res.json({
        message: "Something went wrong",
      });
    }
  },
};

module.exports = productsController;
