const db = require('../data/db-config');

module.exports = {
  registerUser
}

function registerUser(data) {
  return db('userTable')
    .insert(data)
}