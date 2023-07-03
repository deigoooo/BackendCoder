const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const productos = { ...objetos[0], ...objetos[1] };

const nuevaLista = Object.keys(productos);

console.log(nuevaLista);
const a = Object.values(objetos[0]);
const b = Object.values(objetos[1]);
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
}
for (let i = 0; i < b.length; i++) {
  sum = sum + b[i];
}
console.log(sum);
//const venta1 = Object.values(objetos[0]).reduce((acc, v) => acc + v, 0); //acumula en una variable
//const venta2 = Object.values(objetos[1]).reduce((acc, v) => acc + v, 0);

//console.log(`la lista de productos es: ${nuevaLista}`);
//console.log("El total vendido es: " + (venta1 + venta2));
