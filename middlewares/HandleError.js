const HandleError = (err, req, res, next) => {
  res.json({
    success: false,
    status: err.status || 404,
    message: req.message || "Something went wrong...",
  });
};

module.exports = HandleError;
