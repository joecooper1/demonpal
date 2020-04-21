exports.up = function (knex) {
  return knex.schema.createTable("users", (usersTable) => {
    usersTable.increments("user_id").unique().primary();
    usersTable.string("username");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
