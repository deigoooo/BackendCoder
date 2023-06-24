const mostrarLista = (array) => {
  if (array.length === 0) {
    console.log(`lista vacia`);
    return;
  }

  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  return array;
};

const arreglo1 = [1, 2, 3];
const arreglo2 = "";

mostrarLista(arreglo2);
