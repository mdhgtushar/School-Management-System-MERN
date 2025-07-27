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
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['urgent', 'important', 'academic', 'general'],
    default: 'general',
    required: true,
  },
  priority: {
    type: String,
    enum: ['urgent', 'high', 'medium', 'normal'],
    default: 'normal',
    required: true,
  },
  type: {
    type: String,
    enum: ['info', 'warning', 'success'],
    default: 'info',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true
});

//define the model
const NoticeModel = mongoose.model("notice", NoticeSchema);

//export the module
module.exports = NoticeModel;
