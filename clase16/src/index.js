import mongoose from "mongoose";
import studentModel from "./models/student.model.js";
import courseModel from "./models/course.model.js";

const uri = 'mongodb://localhost:27017'

try {
    await mongoose.connect(uri, {
        dbName: 'clase_16'
    })
    console.log('DB Connected!')
    
    // await studentModel.create({
    //     first_name: 'Lucas',
    //     last_name: 'Rueda',
    //     email: 'lrueda@coderhouse.com',
    // })

    // await courseModel.create({
    //     title: 'Backend en NodeJs',
    //     description: 'The best course for ever',
    //     difficulty: 5,
    //     proffesor: 'Alex Marin'
    // })

    // const student = await studentModel.findOne({ _id: '6508ee6d072651b6695c7df7' })
    // student.courses.push({ course: '6508ece003eac0e5cee6caab' })
    // const result = await studentModel.updateOne( { _id: '6508ee6d072651b6695c7df7'} , student )
    // console.log(result)

    const response = await studentModel.findOne({ _id: '6508ee6d072651b6695c7df7' }).populate('courses.course')
    console.log(JSON.stringify(response, null, '\t'))

} catch(err) {
    console.log(err.message)
}