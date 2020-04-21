const bcrypt = require('bcrypt');
const password1 = bcrypt.hashSync("password1", 10);
const password2 = bcrypt.hashSync("password2", 10);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('userTable').insert([
        {username: 'edmadrigal', password: password1 },
        {username: 'erikamadrigal', password: password2}
      ]);
    });
};
