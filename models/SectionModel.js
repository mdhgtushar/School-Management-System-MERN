//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const SectionSchema = mongoose.Schema({
  section_name: {
    type: String,
    required: true,
  },
});

//define the model
const SectionModel = mongoose.model("section", SectionSchema);

//export the module
module.exports = SectionModel;
