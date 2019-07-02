module.exports = ({ app, db }) => {
  app.get('/users/:id',
    require('../middleware/is-valid-id'),
    require('../middleware/is-valid-users-params'),
    require('./get-users-by-id').bind(null, db));
}
