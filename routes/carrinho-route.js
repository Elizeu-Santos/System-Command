const router = require("express").Router();

router.post(
  "/carrinho",
  async (req, res) => {
    try {
      const result = await ProductModel.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: JSON.stringify(err) });
    }
  }
);

//para buscar todas as informações do banco de dados (sem o id, por que se colocar o id ele vai buscar uma coisa especifica)

router.get("/carrinho", async (req, res) => {
  try {
    // Buscar as informações no banco
    const products = await ProductModel.find();

    // Responder a requisição
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  router.delete("/product/:id", async (req, res) => {
    try {
      const result = await ProductModel.deleteOne({ _id: req.params.id });

      if (result.deletedCount < 1) {
        return res.status(404).json({ msg: "Produto não encontrado" });
      }

      // Pela regra do REST, deleções devem retornar um objeto vazio
      res.status(200).json({});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
});

module.exports = router;
