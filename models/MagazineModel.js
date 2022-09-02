//external imports
const mongoose = require("mongoose");

//internal imports

//define the schema
const MagazineSchema = mongoose.Schema({
  thumbnail: {
    type: String,
  },
  title: {
    type: String,
    requierd: true,
  },
  body: {
    type: Text,
  },
});
//define the model
const MagazineModel = mongoose.model("magazine", MagazineSchema);

//export the module
module.exports = MagazineModel;
