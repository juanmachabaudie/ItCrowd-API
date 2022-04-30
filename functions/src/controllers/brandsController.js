const { db } = require("../../firestore");

const brandsController = {
  getBrands: async (req, res) => {
    try {
      const brands = await db.collection("brands").get();
      if (brands.docs) {
        res.json({
          brands: brands.docs.map((brand) => ({
            id: brand.id,
            ...brand.data(),
          })),
        });
      } else {
        res.json("No products to show :(")
      }
    } catch (error) {
      res.json({ message: "Something went wrong" });
    }
  },

  createBrand: async (req, res) => {
    const { name, logo, password } = req.body;
    try {
      if (password === "admin") {
        const newBrand = await db
          .collection("brands")
          .doc(name.toLowerCase())
          .set({ logo });
        newBrand &&
          res.json({
            message: "Brand created",
          });
        } else {
          res.json({
            message: "Denied access",
          });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  },
};

module.exports = brandsController;
