import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    courses: {
        type: [{
            _id: false,
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'courses'
            }
        }]
    }
})

const studentModel = mongoose.model('students', studentSchema)
export default studentModel