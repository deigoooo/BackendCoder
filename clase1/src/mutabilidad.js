const user = {
    nombre:'Axel'
}

var Employee1 = {
    age: 28,
    name: 'abc',
    designation: 'desarrollador'
  }
  
  console.log(delete Employee1.name);   // retorna true
  console.log(delete Employee1.age);    // retorna true
  
  let Employee2 = {
    age: 28,
    name: 'abc',
    designation: 'desarrollador'
  }
  
  console.log(delete Employee2.name);   // retorna true
  console.log(delete Employee2.age);    // retorna true
  
  const Employee3 = {
    age: 28,
    name: 'abc',
    designation: 'desarrollador'
  }
  
  console.log(delete Employee3.name);   // retorna true
  console.log(delete Employee3.age);    // retorna true
  
  console.log(Employee1); // {designation: 'desarrollador'}
  console.log(Employee2); // {designation: 'desarrollador'}
  console.log(Employee3); // {designation: 'desarrollador'}