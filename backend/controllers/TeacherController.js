const TeacherModel = require("../models/TeacherModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const teacher_list = await TeacherModel.find();
    res.send(teacher_list);
  } catch (err) {}
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const teacher_single = await TeacherModel.findById(req.query.id);
    if (teacher_single) {
      res.send(teacher_single);
    } else {
      res.send({
        success: false,
        message: "Teacher Not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    const {
      full_name,
      email,
      phone,
      education,
      subject,
      blood_group,
      description,
    } = req.body;

    const teacher_obj = new TeacherModel({
      full_name,
      email,
      phone,
      education,
      subject,
      blood_group,
      description,
    });

    const save_teacher = await teacher_obj.save();

    if (save_teacher) {
      res.send({
        success: true,
        message: "Teacher Added successfully",
      });
    } else {
      res.send({
        success: false,
        message: "something error",
      });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  try {
    const {
      full_name,
      email,
      phone,
      education,
      subject,
      blood_group,
      description,
    } = req.body;

    const update_teacher = await TeacherModel.findByIdAndUpdate(req.body.id, {
      full_name,
      email,
      phone,
      education,
      subject,
      blood_group,
      description,
    });

    if (update_teacher) {
      res.send({
        success: true,
        message: "Teacher updated successfully",
      });
    } else {
      res.send({
        success: false,
        message: "something error",
      });
    }
  } catch (err) {
    next(err);
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const teacher_single = await TeacherModel.findById(req.query.id);
    if (teacher_single) {
      await teacher_single.remove();
      res.send({
        success: true,
        message: "successfully deleted",
      });
    } else {
      res.send({
        success: false,
        message: "Teacher Not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = app;
