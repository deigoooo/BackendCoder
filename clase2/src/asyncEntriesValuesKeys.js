const objeto = {
  impuesto1: 12,
  impuesto2: 15,
  impuesto3: 20,
};

const soloPropiedades = Object.keys(objeto); // nos muestra las claves del objeto
console.log(soloPropiedades);

const entradas = Object.entries(objeto); //me creo un array del objeto con un array por cada propiedad y valor
console.log(entradas);

const valores = Object.values(objeto); //solo me devuelve los valores del objeto
console.log(valores);
