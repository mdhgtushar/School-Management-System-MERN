const NoticeModel = require("../models/NoticeModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const notice_list = await NoticeModel.find();
    res.send(notice_list);
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const notice_single = await NoticeModel.findById(req.query.id);
    if (notice_single) {
      res.send(notice_single);
    } else {
      res.json({
        success: false,
        message: "Notice Not Found...",
      });
    }
  } catch (err) {
    next(err);
  }
};

//create
app.create = async (req, res, next) => {
  try {
    //get the vale
    const { title, body } = req.body;

    //prepare obj
    const notice_obj = new NoticeModel({
      title,
      body,
    });

    const save_notice = await notice_obj.save();

    if (save_notice) {
      res.send({
        success: true,
        message: "notice successfully created.",
      });
    } else {
      res.send({
        success: false,
        message: "Something error.",
      });
    }
  } catch (err) {
    next(err);
  }
};

//Update
app.update = async (req, res, next) => {
  try {
    //get the vale
    const { title, body } = req.body;

    const update_notice = await NoticeModel.findByIdAndUpdate(req.body.id, {
      title,
      body,
    });

    if (update_notice) {
      res.json({
        success: true,
        message: "notice successfully upadted",
      });
    } else {
      res.json({
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
    const notice_single = await NoticeModel.findById(req.body.id);
    if (notice_single) {
      notice_single.remove();
      res.json({
        success: true,
        message: "Notice Successfully deleted...",
      });
    } else {
      res.json({
        success: false,
        message: "Notice Not Found...",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = app;
