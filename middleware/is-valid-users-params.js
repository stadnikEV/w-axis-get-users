const HttpError = require('../error/http-error')
const getParams = require('../libs/get-params.js')
const isNumeric = require('../libs/is-numeric')
const symbol = require('../libs/get-operator-symbol')

module.exports = (req, res, next) => {
  const { operator, limit } = getParams({ req })

  const setError = () => {
    next(new HttpError({
      status: 400,
    }))
  }

  if (operator && !symbol[operator]) {
    setError()
    return
  }

  if (limit && !isNumeric(limit)) {
    setError()
    return
  }

  res.locals = { operator, limit }

  next();
};
