const NoticeModel = require("../models/NoticeModel");

//scafolding
const app = {};

//All (with filter)
app.get_all = async (req, res, next) => {
  try {
    const { category, priority, type, isActive } = req.query;
    let filter = {};
    
    if (category) filter.category = category;
    if (priority) filter.priority = priority;
    if (type) filter.type = type;
    if (isActive !== undefined) filter.isActive = isActive === 'true';
    
    const notice_list = await NoticeModel.find(filter).sort({ date: -1 });
    res.json({
      success: true,
      data: notice_list,
      message: "Notices retrieved successfully"
    });
  } catch (err) {
    next(err);
  }
};

//Single
app.get_single = async (req, res, next) => {
  try {
    const notice_single = await NoticeModel.findById(req.query.id);
    if (notice_single) {
      res.json({
        success: true,
        data: notice_single,
        message: "Notice retrieved successfully"
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

//create
app.create = async (req, res, next) => {
  try {
    //get the values
    const { title, body, category, priority, type, date, isActive } = req.body;

    //prepare obj
    const notice_obj = new NoticeModel({
      title,
      body,
      category: category || 'general',
      priority: priority || 'normal',
      type: type || 'info',
      date: date || new Date(),
      isActive: isActive !== undefined ? isActive : true,
    });

    const save_notice = await notice_obj.save();

    if (save_notice) {
      res.json({
        success: true,
        data: save_notice,
        message: "Notice successfully created.",
      });
    } else {
      res.json({
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
    //get the values
    const { id, title, body, category, priority, type, date, isActive } = req.body;

    const update_notice = await NoticeModel.findByIdAndUpdate(id, {
      title,
      body,
      category,
      priority,
      type,
      date,
      isActive,
    }, { new: true });

    if (update_notice) {
      res.json({
        success: true,
        data: update_notice,
        message: "Notice successfully updated",
      });
    } else {
      res.json({
        success: false,
        message: "Notice not found or update failed",
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
      await NoticeModel.findByIdAndDelete(req.body.id);
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

//Toggle active status
app.toggle_status = async (req, res, next) => {
  try {
    const { id } = req.body;
    const notice = await NoticeModel.findById(id);
    
    if (notice) {
      notice.isActive = !notice.isActive;
      await notice.save();
      
      res.json({
        success: true,
        data: notice,
        message: `Notice ${notice.isActive ? 'activated' : 'deactivated'} successfully`,
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
