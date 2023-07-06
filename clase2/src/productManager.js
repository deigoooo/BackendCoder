class ProductManager {
  #id;
  constructor() {
    this.products = [
      {
        title: "Cama",
        descripcion: "Cama de 2 plazas",
        precio: 150000,
        thumbnail:
          "https://www.maneldecoracion.com/tienda/980-large_default/cama-so-pop-noctis.jpg",
        code: 12,
        stock: 15,
        id: 0,
      },
    ];
    this.#id = 0;
  }
  #idGen = () => {
    this.#id++;
    return this.#id;
  };
  addProduct(product) {
    const formato = {
      title: "Titulo",
      descripcion: "descripcion",
      precio: 0,
      thumbnail: "aca va la url de la imagen",
      code: 4789,
      stock: 15,
    };
    const validacion = (product) => {
      return new Promise((resolve, reject) => {
        if (
          Object.keys(product).every((element) =>
            formato.hasOwnProperty(element)
          )
        ) {
          product.id = this.#idGen();
          resolve(product);
        } else {
          reject("Inserte un producto de formato valido.");
        }
      });
    };
    validacion(product)
      .then((newProduct) => {
        const c = [];
        this.products.map((prod) => {
          console.log("entro al map");
          if (prod.code === newProduct.code) {
            throw new Error("el code no puede repetirse");
          }
          c.push(newProduct);
          if (c.length <= 1) {
            this.products.push(newProduct);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getProduct() {
    console.log(this.products);
  }
}

const manejadorProductos = new ProductManager();

manejadorProductos.addProduct({
  title: "Cama",
  descripcion: "Cama de 2 plazas",
  precio: 150000,
  thumbnail:
    "https://www.maneldecoracion.com/tienda/980-large_default/cama-so-pop-noctis.jpg",
  code: 12,
  stock: 15,
});
manejadorProductos.getProduct();
