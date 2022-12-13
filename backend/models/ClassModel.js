//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const ClassSchema = mongoose.Schema({
  class_name: {
    type: String,
    required: true,
  },
  section_ids: {
    type: String,
  },
});

//define the model
const ClassModel = mongoose.model("class", ClassSchema);

//export the module
module.exports = ClassModel;
