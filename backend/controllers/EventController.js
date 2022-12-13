const EventModel = require("../models/EventModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const event_list = await EventModel.find();
    res.send(event_list);
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const event_single = await EventModel.findById(req.query.id);
    if (event_single) {
      res.send(event_single);
    } else {
      res.send({
        success: false,
        message: "event not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    const { title, event_date, body } = req.body;

    const event_obj = new EventModel({
      title,
      body,
      event_date,
    });

    const save_event = await event_obj.save();
    if (save_event) {
      res.send({
        success: true,
        message: "Event Created successfully",
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
    const { title, body, event_date } = req.body;

    const update_event = await EventModel.findByIdAndUpdate(req.body.id, {
      title,
      body,
      event_date,
    });

    if (update_event) {
      res.send({
        success: true,
        message: "Event Updated Successfully",
      });
    } else {
      res.send({
        success: false,
        message: "something error.",
      });
    }
  } catch (err) {
    next(err);
  }
};

//delete
app.delete = async (req, res, next) => {
  try {
    const event_single = await EventModel.findById(req.body.id);
    if (event_single) {
      await event_single.remove();
      res.send({
        success: true,
        message: "successfully deleted",
      });
    } else {
      res.send({
        success: false,
        message: "event not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

//export the module
module.exports = app;
