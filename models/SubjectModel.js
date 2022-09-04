//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const SubjectSchema = mongoose.Schema({
  subject_name: {
    type: String,
    required: true,
  },
  subject_class: {
    type: String,
  },
});

//define the model
const SubjectModel = mongoose.model("subject", SubjectSchema);

//export the module
module.exports = SubjectModel;
