class ProductManager {
  #_products;
  constructor() {
    this.#_products = [];
  }
  getProduct() {
    return this.#_products;
  }
  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      return "[ERROR] El producto tiene algun campo faltante";
    }
    const code = this.#_products.find(
      (element) => element.code === product.code
    );
    if (code) {
      console.log(`[ERROR] El codigo ${code.code} ya existe`);
      return "[ERROR] El Codigo ya existe";
    }
    const newProduct = { id: this.#getNextID(), ...product };
    this.#_products.push(newProduct);
    return newProduct;
  }
  getProductById(id) {
    const productId = this.#_products.find((element) => element.id === id);
    if (!productId) return "[ERROR] El Id no existe";
    return productId;
  }
  #getNextID() {
    if (this.#_products.length === 0) return 1;
    return this.#_products[this.#_products.length - 1].id + 1;
  }
}

const pm = new ProductManager();

pm.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});
pm.addProduct({
  title: "producto prueba 2",
  description: "Este es un producto prueba 2",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc1234",
  stock: 25,
});

console.log(pm.getProduct());

console.log(pm.getProductById(2));
