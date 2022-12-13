//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const ResultSchema = mongoose.Schema({
  student_id: {
    type: String,
    required: true,
  },
  exam_id: {
    type: String,
    required: true,
  },
  subject_id: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  number_input: {
    type: String,
    required: true,
  },
});

//define the model
const ResultModel = mongoose.model("result", ResultSchema);

//export the module
module.exports = ResultModel;
