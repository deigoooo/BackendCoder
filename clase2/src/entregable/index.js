import ProductManager from "./productManager.js";

const pm = new ProductManager("./products.txt");

/* await pm.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});
await pm.addProduct({
  title: "producto prueba 2",
  description: "Este es un producto prueba 2",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc1234",
  stock: 25,
}); */

//console.log(await pm.getProductById(2));

/* pm.updateProduct(2, {
  title: "producto modificado",
  description: "Este es un producto prueba para modificar",
  price: 200,
  thumbnail: "Sin imagen",
  code: "4567",
  stock: 25,
}); */
/* pm.updateProduct(2, {
  title: "producto modificado",
  description: "Este es un producto prueba para modificar",
  price: 200,
  thumbnail: "Sin imagen",
  code: "8475",
  stock: 25,
}); */

console.log(await pm.getProduct());
