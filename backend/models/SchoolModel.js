//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const SchoolSchema = mongoose.Schema({
  school: {
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  students: {},
  teachers: {},
});

//define the model
const SchoolModel = mongoose.model("school", SchoolSchema);

//export the module
module.exports = SchoolModel;
