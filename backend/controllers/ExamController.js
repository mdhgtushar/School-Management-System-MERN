const ExamModule = require("../models/ExamModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  const exam_list = await ExamModule.find();
  res.send(exam_list);
};

//Single
app.get_single = async (req, res, next) => {
  const exam_single = await ExamModule.findById(req.query.id);
  if (exam_single) {
    res.send(exam_single);
  } else {
    res.send({ success: false, message: "Record not found." });
  }
};

//create
app.create = async (req, res, next) => {
  try {
    //get the data
    const { exam_name } = req.body;

    //prepare object
    const exam_object = new ExamModule({
      exam_name,
    });
    //save the data
    const exam_save = await exam_object.save();

    if (exam_save) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  try {
    const { id, exam_name } = req.body;

    const exam_update = await ExamModule.findByIdAndUpdate(id, { exam_name });

    if (exam_update) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  } catch (err) {
    next(err);
  }
};

//delete
app.delete = async (req, res, next) => {
  const exam_single = await ExamModule.findById(req.body.id);
  if (exam_single) {
    exam_single.remove();
    res.send({ success: true, message: "successfylly Deleted" });
  } else {
    res.send({ success: false, message: "Record not found." });
  }
};

//export app
module.exports = app;
