const db = require('../data/db-config');

module.exports = {
  getUser
}

function getUser() {
  return db('userTable')
}