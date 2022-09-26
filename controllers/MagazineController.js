const MagazineModel = require("../models/MagazineModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const magazine_list = await MagazineModel.find();
    res.send(magazine_list);
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const magazine_single = await MagazineModel.findById(req.query.id);
    if (magazine_single) {
      res.send(magazine_single);
    } else {
      res.json({
        success: false,
        message: "Magazine not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  //get the value
  const { title, body } = req.body;

  //prepare the object
  const magazine_obj = new MagazineModel({
    title,
    body,
  });
  const save_magazine = await magazine_obj.save();

  if (save_magazine) {
    res.send({
      success: true,
      message: "magazine created Successfully",
    });
  } else {
    res.json({
      success: false,
      message: "Something error",
    });
  }
};

//Update
app.update = async (req, res, next) => {
  const { title, body } = req.body;

  const update_magazine = await MagazineModel.findByIdAndUpdate(req.body.id, {
    title,
    body,
  });

  if (update_magazine) {
    res.send({
      success: true,
      message: "successfully updated.",
    });
  } else {
    res.send({
      success: false,
      message: "something error",
    });
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const magazine_single = await MagazineModel.findById(req.body.id);
    if (magazine_single) {
      magazine_single.remove();
      res.json({
        success: false,
        message: "Magazine Sucessfully deleted",
      });
    } else {
      res.json({
        success: false,
        message: "Magazine not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

//export the module
module.exports = app;
