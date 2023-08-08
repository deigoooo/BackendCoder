//1. importamos la libreria express
import express from "express";

const users = [
  {
    id: 1,
    name: "Alex",
    last_name: "Marin",
    age: 46,
  },
  {
    id: 2,
    name: "Shakira",
    last_name: "No se",
    age: 45,
  },
];

//2. la ejecutamos (a la librería express)
const app = express();

//4. creacion de las rutas del servidor
app.get("/", (req, res) => {
  res.send("Hola Mundo!!");
});

// recibir info del cliente por URL PARAMS
app.get("/users/:id", (req, res) => {
  res.send(users.find((item) => item.id == req.params.id));
});

// recibir info del cliente por QUERY PARAMS
app.get("/users", (req, res) => {
  const result = users.find((item) => item.id == req.query.id);
  if (!result) return res.send("No existe ese usuario");
  res.send(result);
});

app.get("/home", (req, res) => {
  res.send(
    '<h1>Hola Mundo!!!</h1><hr /><h2>Bienvenido</h2><div style="color: blue">Soy un texto de color blue</div>'
  );
});

//3. app es el servidor web, lo ponemos a escuchar peticiones en el puerto 8080
app.listen(8080, () => console.log("Server Up!"));
