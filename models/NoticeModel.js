//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const NoticeSchema = mongoose.Schema({
  thumbnail: {
    type: String,
  },
  title: {
    type: String,
    requierd: true,
  },
  body: {
    type: String,
  },
});
//define the model
const NoticeModel = mongoose.model("notice", NoticeSchema);

//export the module
module.exports = NoticeModel;
