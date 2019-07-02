const symbol = require('../libs/get-operator-symbol')

module.exports = (db, req, res, next) => {
  const id = req.params.id
  const {
    operator: operatorSymbol,
    limit: limitSearch,
  } = res.locals

  const operator = operatorSymbol ? symbol[operatorSymbol] : symbol.e
  const limit = (limitSearch <= 50) ? limitSearch : 50

  db.query(`SELECT * FROM users WHERE id ${operator} ${id} LIMIT ${limit}`)
    .then(data => {
      res.status(200)
      res.json(data)
    })
    .catch(e => {
      next(e)
    })
}
