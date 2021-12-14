const router = require("express").Router();
const ProductModel = require("../models/Product.model")

router.post("/product", async (req, res) => {
    try {
        const result = await ProductModel.create(
        req.body
        )
        return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: JSON.stringify(err) });
}});

module.exports = router;        