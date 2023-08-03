class ProductManager {
  #_path;
  #_products;
  constructor() {
    this.#_path;
    this.#_products = [];
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      product.stock
    ) {
      return "[ERROR] El producto tiene algun campo faltante";
    }
    const code = this.#_products.find((element) => {
      element.code === product.code;
    });
    if (code) {
      return "[ERROR] El code del producto ingresado ya existe";
    }
    const newProduct = { id: this.#getNextID(), ...product };
    this.#_products.push(newProduct);
    return newProduct;
  }
  getById(id) {
    const productId = this.#_products.find((element) => element.id === id);
    if (!productId) return "[ERROR] No existe el ID";
    return productId;
  }
  getProduct() {
    return this.#_products;
  }
  updateProduct(product, update) {}
  deleteProduct(product) {}
  #getNextID() {
    if (this.#_products.length === 0) return 1;
    return this.#_products[this.#_products.length - 1].id + 1;
  }
}
