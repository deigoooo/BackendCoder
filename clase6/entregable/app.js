import express from "express";
import ProductManager from "./productManager.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

const pm = new ProductManager("./products.txt");

app.get("/products", async (req, res) => {
  const products = req.query.products;
  const allProducts = await pm.getProduct();
  const newProducts = [];
  if (!products) {
    res.status(200).json({ status: "succes", payload: await allProducts });
  } else {
    for (let i = 0; i < products; i++) {
      newProducts.push(allProducts[i]);
    }
    res.send(newProducts);
  }
});
app.get("/products/:id", async (req, res) => {
  const allProducts = await pm.getProduct();
  const result = allProducts.find((element) => element.id === req.params.id);
  res.status(200).json({ status: "succes", payload: result });
});

app.listen(8080, () => console.log("Server UP"));
