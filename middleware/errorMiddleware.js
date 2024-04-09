// not Found

const notFound = (req, res, next) => {
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500).json({
    message: err.message || "an unkown error occurred",
    // errorInfo: err.stack
  });
};

module.exports = { errorHandler, notFound };
