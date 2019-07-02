const HttpError = require('../error/http-error')
const isNumeric = require('../libs/is-numeric')

module.exports = (req, res, next) => {
  const id = req.params.id

  if (!isNumeric(id)) {
    next(new HttpError({
      status: 400,
    }))

    return
  }

  next()
}
