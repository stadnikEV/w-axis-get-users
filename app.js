const express = require('express');
const http = require('http');
const config = require('./config');
const initMySQL = require('./libs/database/init-MySQL')
const initTables = require('./libs/database/init-tables')
const initUsers = require('./libs/init-users')
const logger = require('./libs/logger');


let db = null

initMySQL()
  .then((database) => {
    db = database
    return initTables(db)
  })
  .then(() => {
    return initUsers(db)
  })
  .then(() => {
    const port = config.get('port-dev')

    const app = express()
    app.set('port', port)

    app.use(require('./middleware/send-http-error'))
    require('./routes')({ app, db })
    app.use(require('./error/not-found'))
    app.use(require('./error/error-hendler'))

    http.createServer(app).listen(port, () => {
      console.log('Express server listening on port ' + port)
    })
  })
  .catch((e) => {
    console.log(e)
    logger.error(e.stack)
  })
