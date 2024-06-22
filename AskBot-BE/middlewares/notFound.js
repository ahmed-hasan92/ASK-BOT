const notFound = async (req, res, next) => {
  res.status(404).json("This route is not found");
};

module.exports = notFound;
