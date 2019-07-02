
module.exports = ({ database: db, fields, number }) => {
  return new Promise((resolve, reject) => {
    const { name } = fields
    let userNumber = 1

    const addUser = () => {
      db.query(`INSERT INTO users(name) VALUES('${name}${userNumber}')`)
      .then(() => {
        number -= 1

        if (number === 0) {
          console.log(`${userNumber} users added`)
          resolve()
          return
        }

        userNumber += 1

        addUser()
      })
      .catch((e) => {
        reject(e)
      })
    }

    addUser()
  })
}
