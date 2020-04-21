const bcrypt = require('bcrypt');
let password1 = bcrypt.hashSync('password1#', 10);
let password2 = bcrypt.hashSync('password2#', 10);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'edmadrigal', password: password1},
        {username: 'erikamadrigal', password: password2}
      ]);
    });
};
