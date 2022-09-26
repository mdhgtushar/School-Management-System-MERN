//external imports
const mongoose = require("mongoose");
//internal imports

//define the schema
const EventSchema = mongoose.Schema({
  thumbnail: {
    type: String,
  },
  title: {
    type: String,
    requierd: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  body: {
    type: String,
  },
});

//define the model
const EventModel = mongoose.model("event", EventSchema);

//export the module
module.exports = EventModel;
