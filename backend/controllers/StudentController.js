const StudentModel = require("../models/StudentModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const student_list = await StudentModel.find({
      "student.class_name": req.query.class_name || /[a-zA-Z]/,
      "student.section": req.query.section || /[a-zA-Z]/,
    }).exec();
    res.send(student_list);
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const student_single = await StudentModel.findById(req.query.id);
    if (student_single) {
      res.send(student_single);
    } else {
      res.send({
        success: false,
        message: "Stuent not found...",
      });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    const { full_name, section, class_name, blood_group } = req.body;

    const setudent_obj = new StudentModel({
      student_id: Math.random(),
      student: {
        full_name,
        class_name,
        section,
        blood_group,
      },
    });

    const save_student = await setudent_obj.save();

    if (save_student) {
      res.send({
        success: true,
        message: "Student added successfully",
      });
    } else {
      res.send({
        success: false,
        message: "Something error",
      });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  try {
    const { full_name, section, class_name, blood_group } = req.body;

    const update_student = await StudentModel.findByIdAndUpdate(req.body.id, {
      student: {
        full_name,
        class_name,
        section,
        blood_group,
      },
    });

    if (update_student) {
      res.send({
        success: true,
        message: "Successfully updated",
      });
    } else {
      res.send({
        success: false,
        message: "Something error...",
      });
    }
  } catch (err) {
    next(err);
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const student_single = await StudentModel.findById(req.query.id);

    if (student_single) {
      await student_single.remove();
      res.send({
        success: true,
        message: "Student deleted successfully",
      });
    } else {
      res.send({
        success: false,
        message: "Stuent not found...",
      });
    }
  } catch (err) {
    next(err);
  }
};

//export the app
module.exports = app;
