const mysql = require('promise-mysql')
const config = require('../../config')

module.exports = () => {
  return new Promise((resolve, reject) => {
    const { host, user, password, database } = config.get('MySQL')
    let db = null

    mysql.createConnection({ host, user, password })
      .then((connection) => {
        db = connection
        return db.query(`CREATE DATABASE ${database}`)
      })
      .then(() => {
        console.log(`database "${database}" created`)
        return db.end()
      })
      .then(() => {
        resolve()
      })
      .catch((e) => {
        reject(e)
      })
  })
}
