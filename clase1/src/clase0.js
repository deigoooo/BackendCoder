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
