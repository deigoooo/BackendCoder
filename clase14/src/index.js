import mongoose from "mongoose";

const estudiantes = [
  { nombre: "Estudiante 1", edad: 20, nota: 85 },
  { nombre: "Estudiante 2", edad: 22, nota: 78 },
  { nombre: "Estudiante 3", edad: 19, nota: 92 },
  { nombre: "Estudiante 4", edad: 21, nota: 88 },
  { nombre: "Estudiante 5", edad: 18, nota: 75 },
  { nombre: "Estudiante 6", edad: 23, nota: 95 },
  { nombre: "Estudiante 7", edad: 20, nota: 70 },
  { nombre: "Estudiante 8", edad: 22, nota: 89 },
  { nombre: "Estudiante 9", edad: 24, nota: 83 },
];

const estudiantesSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  nota: Number,
});

const estudiantesDAO = mongoose.model("estudiantes", estudiantesSchema);

try {
  await mongoose.connect(
    "mongodb+srv://deigoooo:d1i9e8g8o@dfr-test.bfhq0ur.mongodb.net/coder"
  );
  console.log("DB connected");

  for (const estudiante of estudiantes) {
    await estudiantesDAO.create(estudiante);
  }
  console.log("usuario creado");
} catch (error) {
  console.log(error.message);
}
