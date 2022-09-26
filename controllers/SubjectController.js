const SubjectModel = require("../models/SubjectModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const subject_list = await SubjectModel.find();
    res.send(subject_list);
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const subject_single = await SubjectModel.findById(req.query.id);

    if (subject_single) {
      res.send(subject_single);
    } else {
      res.send({ success: false, message: "Something error..." });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    const { subject_name } = req.body;

    const subject_obj = new SubjectModel({
      subject_name,
    });

    const save_subject = await subject_obj.save();

    if (save_subject) {
      res.send({ success: true, message: "successfully Saved" });
    } else {
      res.send({ success: false, message: "something error " });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  const { subject_name, id } = req.body;

  const update_subject = await SubjectModel.findByIdAndUpdate(id, {
    subject_name,
  });

  if (update_subject) {
    res.send({ success: true, message: "Subject Update Successfully" });
  } else {
    res.send({ success: false, message: "something error" });
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const subject_single = await SubjectModel.findById(req.query.id);
    if (subject_single) {
      await subject_single.remove();
      res.send({ success: true, message: "successfully deleted" });
    } else {
      res.send({ success: false, message: "Something error..." });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = app;
