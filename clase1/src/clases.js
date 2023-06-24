class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar = () => {
    console.log(`hola papu soy ${this.nombre} ${this.apellido}`);
  };
}
const persona1 = new Persona("Martin", "Pescador");
const persona2 = new Persona("Roberto", "Carlos");

persona1.saludar();
persona2.saludar();
