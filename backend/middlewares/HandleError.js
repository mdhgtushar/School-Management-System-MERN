const HandleError = (err, req, res, next) => {
  res.json({
    success: false,
    status: err.status || 404,
    message: err.message || "Something went wrong...(MEH)",
    stack: err.stack,
  });
};

module.exports = HandleError;
