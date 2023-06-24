//variables globales

const global = "test";

function prueba() {
  //solo puedo acceder a variable desde la function
  const variable = 1;
  console.log(variable);
  console.log(global);
}

prueba();
