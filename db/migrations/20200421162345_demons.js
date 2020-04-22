exports.up = function (knex) {
  return knex.schema.createTable("demons", (demonsTable) => {
    demonsTable.increments("demon_id").primary();
    demonsTable.string("name");
    demonsTable
      .string("owner")
      .references("users.username")
      .onDelete("CASCADE");
    demonsTable.timestamp("demon_created_at").defaultTo(knex.fn.now());
    demonsTable.string("personality");
    demonsTable.integer("life_stage").defaultTo(1);
    demonsTable.integer("weight");
    demonsTable.string("type");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("demons");
};
