let variableDePreba = 0;

let variableAsignable = variableDePreba || "Sin variable"; // si es 0 lo toma como vacio
console.log(variableAsignable);

let variableConNullish = variableDePreba ?? "sin valor";
console.log(variableConNullish); //  solo si es nulo o indefinido usa la opcion sin valor

class Persona {
  #fullname; // las variables privadas se tienen que inicializar al comienzo
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#fullname = `${this.nombre} ${this.apellido}`;
  }
  getFullName = () => {
    return this.#fullname;
  };
  #metodoPrivado = () => {
    //tambien se pueden hacer metodos privados
  };
}

let instancia1 = new Persona("Mauricio", "Espinosa");

console.log(instancia1.getFullName());
