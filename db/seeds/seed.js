const { userData } = require("../data/index.js");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const usersInsertions = knex("users").insert(userData);
      const demonsInsertions = knex("demons").insert(demonData);
      return Promise.all([usersInsertions, demonsInsertions]);
    });
};
