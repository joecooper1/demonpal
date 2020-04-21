exports.up = function (knex) {
  return knex.schema.createTable("demons", (demonsTable) => {
    demonsTable.increments("demon_id").primary();
    demonsTable.string("demonname");
    demonsTable.string("owner").references(users.username);
    demonsTable.timestamp("demon_created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("demons");
};
