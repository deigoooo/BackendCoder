import mongoose from "mongoose";
import studentModel from "./models/student.model.js";

const uri = "mongodb://localhost:27017";

try {
  await mongoose.connect("mongodb://0.0.0.0:27017/escuela");
  console.log("Base conectada");
} catch (error) {
  console.error(error);
}
