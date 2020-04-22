exports.up = function (knex) {
  return knex.schema.createTable("demons", (demonsTable) => {
    demonsTable.increments("demon_id").primary();
    demonsTable.string("name").notNull();
    demonsTable
      .string("owner")
      .references("users.username")
      .onDelete("CASCADE")
      .notNull();
    demonsTable.timestamp("demon_created_at").defaultTo(knex.fn.now());
    demonsTable.string("personality").notNull();
    demonsTable.integer("life_stage").defaultTo(1);
    demonsTable.integer("weight").notNull();
    demonsTable.string("type").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("demons");
};
