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
    validacion(product).then((newProduct) => {
      const valido = this.products.reduce((acc, prod) => {
        if (prod.code === newProduct.code) {
          console.log(`El producto no puede tener el mismo Codigo`);
          throw new Error("El producto no puede tener el mismo Codigo");
        } else {
          console.log(prod);
          acc.push(prod);
          return acc;
        }
      }, 0);
      console.log(valido);
    });
    /*     return new Promise((resolve, reject) => {
      if (
        Object.keys(product).every((element) => formato.hasOwnProperty(element))
      ) {
        product.id = this.#idGen();
        resolve(this.products.push(product));
      } else {
        reject("Inserte un producto valido.");
      }
    }); */
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
  code: 4568,
  stock: 15,
});
//manejadorProductos.getProduct();
