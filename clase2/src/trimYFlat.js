let cadena1 = `           hola `;
console.log(cadena1.trim()); // elimina los espacios en blanco

let mensajes = [];
let intentoDeMensaje = `                       hola `;
if (intentoDeMensaje.trim().length > 0) {
  mensajes.push(intentoDeMensaje.trim()); //pushea dentro del array
  console.log(mensajes);
} else {
  console.log(
    `Mensaje vacio, para poder enciar un mensaje, favor de escribir algo`
  );
}

let arrayAnidado= [1,32,4,5,6,[1,4,5,1],[3411,3,4]];
console.log(arrayAnidado.flat()); //elimino el anidado y dejo un array plano
