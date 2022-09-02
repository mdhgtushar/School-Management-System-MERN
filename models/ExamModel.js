//external imports
const mongoose = require("mongoose");

//internal imports
//=>

//define the exam schema
const ExamSchema = mongoose.Schema(
  {
    exam_name: {
      type: String,
      required: true,
    },
    exam_class: {
      type: String,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

//declare the exam model
const ExamModule = mongoose.model("exam", ExamSchema);

//export the model
module.exports = ExamModule;
