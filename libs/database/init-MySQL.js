const mysql = require('promise-mysql')
const createDatabase = require('./create-database')
const config = require('../../config')

module.exports = () => {
  return new Promise((resolve, reject) => {
    const connect = () => {
      mysql.createConnection(config.get('MySQL'))
        .then((db) => {
          resolve(db)
        })
        .catch((e) => {
          const { database } = config.get('MySQL')
          if (e.sqlMessage === `Unknown database '${database}'`) {
            createDatabase()
              .then(() => {
                connect()
              })
              .catch((e) => {
                reject(e)
              })

            return
          }

          reject(e)
        })
    }

    connect()
  })
}
