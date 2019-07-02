const HttpError = require('./http-error')

module.exports = (reg, res) => {
  res.sendHttpError(new HttpError({
    status: 404,
    message: 'Not found',
  }))
}
