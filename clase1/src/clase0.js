/* 
  const palabraMasLarga = (argumento) => {
  const nuevoArgumento = argumento.split(" ");
  //console.log(nuevoArgumento);
  let i = 0;
  let mayor = 1;
  nuevoArgumento.forEach((element, index) => {
    if (element.length >= mayor) {
      i = element;
      mayor = element.length;
    }
  });
  console.log(i);
};

palabraMasLarga("la coca es ricasa ortopedia"); 
*/

/* 
console.log(isReverseInt(234, -432))  //false
console.log(isReverseInt(234, 432))  //true
console.log(isReverseInt(-234, -432))  //true
console.log(isReverseInt(-234, -732))  //false 
*/
const isReverseInt = (argumento1, argumento2) => {
  const astr = argumento1.toString(); // para la comparacion
  const bstr = argumento2.toString(); // para la comparacion
  let aent = 0;
  if (argumento1 < 0) {
    aent = argumento1 * -1;
  } else {
    aent = argumento1;
  }
  const arev = aent.toString().split("").reverse().join(""); //para ver el numero al revez entero
  if (astr.length == bstr.length) {
    if (argumento2 < 0) {
      argumento2 = argumento2 * -1;
    }
    if (parseInt(arev) == argumento2) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};
console.log(isReverseInt(-234, -732));
