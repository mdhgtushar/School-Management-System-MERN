const CreateError = (status, message) => {
  const err = new Error();
  err.status = status || 404;
  err.message = message || "Something went wrong...(CRE)";
  return err;
};

module.exports = CreateError;
