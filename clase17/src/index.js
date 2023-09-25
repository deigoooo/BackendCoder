import mongoose from "mongoose";
import userModel from "./models/user.model.js";

await mongoose.connect('mongodb://localhost:27017', {
    dbName: 'pagination'
})
console.log('DB Connected')
// const users = await userModel.find()
const users = await userModel.paginate({ gender: 'Female'}, {limit: 5, page: 6})
console.log(users)