//internal imports
const ClassModel = require("../models/ClassModel");
const CreateError = require("../middlewares/CreateError");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const get_class = await ClassModel.find();
    res.send(get_class);
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const get_class = await ClassModel.findById(req.query.id);
    res.send(get_class);
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    //get the inputs
    const class_name = req.body.class_name;

    //get the saveable object
    const class_obj = new ClassModel({
      class_name,
    });

    //save the object
    const seve_class = await class_obj.save();

    //send the response
    if (seve_class) {
      res.json({
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  try {
    //get the inputs
    const class_name = req.body.class_name;

    //update the object
    const update_class = await ClassModel.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        class_name,
      }
    );

    //send the response
    if (update_class) {
      res.json({
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }
  } catch (err) {
    next(err);
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const get_class = await ClassModel.findById(req.body.id);
    if (get_class) {
      await get_class.remove();
      res.json({
        success: true,
      });
    } else {
      res.send({
        success: false,
        message: "Record Not Found",
      });
    }
  } catch (err) {
    next(err);
  }
};

//export the app
module.exports = app;
