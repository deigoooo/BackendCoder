class Contador {
  constructor(nombre, contador) {
    this.nombre = nombre;
    this.contador = 0;
  }
  static contadorGlobal = 0;

  getResponsable = () => {
    console.log(this.nombre);
  };
  conteoIndividual = () => {
    this.contador++;
  };
  conteoGlobal = () => {
    Contador.contadorGlobal++;
  };
  getCuentaIndividual = () => {
    console.log(this.contador);
  };
  getCuentaGlobal = () => {
    console.log(Contador.contadorGlobal);
  };
}

const cuenta = new Contador("Diego");

cuenta.conteoIndividual();
cuenta.conteoIndividual();
cuenta.conteoIndividual();
cuenta.conteoGlobal();

cuenta.getCuentaIndividual();
cuenta.getCuentaGlobal();
