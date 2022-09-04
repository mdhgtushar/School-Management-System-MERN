const e = require("express");
const SectionModel = require("../models/SectionModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  const section_list = await SectionModel.find();
  res.send(section_list);
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const single_section = await SectionModel.findById(req.query.id);
    if (single_section) {
      res.send(single_section);
    } else {
      res.send({ success: false, message: "Record Not Found!" });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    const { section_name } = req.body;

    const section_obj = new SectionModel({
      section_name,
    });

    const save_section = await section_obj.save();

    if (save_section) {
      res.send({ success: true, message: "Successfully saved" });
    } else {
      res.send({ success: false, message: "Something went wrong.." });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  try {
    const { section_name, id } = req.body;
    const update_section = await SectionModel.findByIdAndUpdate(id, {
      section_name,
    });

    if (update_section) {
      res.send({ success: true, message: "Successfully Updated" });
    } else {
      res.send({ success: false, message: "Something went wrong.." });
    }
  } catch (err) {
    next(err);
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const single_section = await SectionModel.findById(req.body.id);
    if (single_section) {
      single_section.remove();
      res.send({ success: true, message: "Successfully deleted" });
    } else {
      res.send({ success: false, message: "Record Not Found!" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = app;
