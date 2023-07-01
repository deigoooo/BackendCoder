const objeto1 = {
  propiedad1: 2,
  propiedad2: "b",
  propiedad3: true,
};
const objeto2 = {
  propiedad2: "c",
  propiedad3: [1, 2, 3, 4],
};

//quiero conseguir un objeto resultante del objeto 1 y 2

const objetoResultante = {
  ...objeto1,
  ...objeto2,
};
console.log(objetoResultante);

//res operator

const objeto3 = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...rest } = objeto3;
console.log(a);
console.log(rest);
