//exponencial
const valoresBase = [1, 2, 3, 4, 5];

const nuevosValores = valoresBase.map((numero, indice) => numero ** indice);
console.log(nuevosValores);

//includes

const nombres = ["Luciana", "Gala", "Messi", "Diego"];

if (nombres.includes("Messi")) {
  console.log(`tenemos incluidos este elemento`);
} else {
  console.log(`no tenemos incluidos este elemento`);
}
