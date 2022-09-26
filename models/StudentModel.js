//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const StudentSchema = mongoose.Schema({
  student_id: {
    type: Number,
    unique: true,
  },
  student: {
    full_name: { type: String },
    image: { type: String },
    class_name: { type: String },
    section: { type: String },
    blood_group: { type: String },
    hobby: { type: String },
    achivements: { type: String },
    event_participation: { type: String },
  },
  parent: {
    father: {
      full_name: { type: String },
      nid: { type: Number },
      phone: { type: String },
      email: { type: String },
    },
    mother: {
      full_name: { type: String },
      nid: { type: Number },
      phone: { type: String },
      email: { type: String },
    },
  },
});

//define the model
const StudentModel = mongoose.model("student", StudentSchema);

//export the module
module.exports = StudentModel;
