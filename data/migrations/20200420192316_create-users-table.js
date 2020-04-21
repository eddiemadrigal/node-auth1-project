
exports.up = function(knex) {
  return knex.schema
    .createTable('userTable', tbl => {
      tbl.increments('id', 255).primary();
      tbl.string('username', 255).notNullable();
      tbl.string('password', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('userTable')
};
