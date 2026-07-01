exports.success = (res, status, message, data = {}) => {
  return res.status(status).json({
    success: true,
    message,
    ...data,
  });
};

exports.failure = (res, status, message) => {
  return res.status(status).json({
    success: false,
    message,
  });
};