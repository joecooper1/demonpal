exports.up = function (knex) {
  return knex.schema.createTable("users", (usersTable) => {
    usersTable.increments("user_id").unique();
    usersTable.string("username").unique().primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
