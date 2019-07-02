const addUsers = require('./add-users')

module.exports = (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT COUNT(*) AS number FROM users')
      .then((result) => {
        const number = result[0].number

        if (!number) {
          return addUsers({
            database:db,
            fields: { name: 'user' },
            number: 200,
          })
        }
      })
      .then(() => {
        resolve()
      })
      .catch((e) => {
        reject(e)
      })
  })
}
