//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const TeacherSchema = mongoose.Schema({
  full_name: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  education: {
    type: String,
  },
  subject: {
    type: String,
  },
  blood_group: {
    type: String,
  },
  description: {
    type: String,
  },
});

//define the model
const TeacherModel = mongoose.model("teacher", TeacherSchema);

//export the module
module.exports = TeacherModel;
