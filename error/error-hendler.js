const HttpError = require('./http-error')
const logger = require('../libs/logger')

module.exports = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.sendHttpError(err)
    logger.info(err.stack)
    return
  }

  logger.error(err.stack)

  res.sendHttpError(new HttpError({
    status: 500,
    message: 'server Error',
  }))
}
