const user = require('../../models/user')

module.exports = (db) => {
  const promise = new Promise((resolve, reject) => {
    db.query(`CREATE TABLE users (${user})`)
      .then(() => {
        resolve()
      })
      .then(() => {
        console.log('table "users" created')
        resolve()
      })
      .catch((err) => {
          if (err.sqlMessage === "Table 'users' already exists") {
            resolve()

            return
          }

          reject(err)
      })
  })

  return promise
}
