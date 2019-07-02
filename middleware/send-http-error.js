
module.exports = function(req, res, next) {
  res.sendHttpError = (err) => {
    res.status(err.status)
    res.json(err)
  }

  next()
}
