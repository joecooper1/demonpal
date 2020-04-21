const { userData, demonData } = require("../data/index.js");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const usersInsertions = knex("users").insert(userData);
      return Promise.all([usersInsertions]);
    })
    .then(() => {
      const demonsInsertions = knex("demons").insert(demonData);
      return Promise.all([demonsInsertions]);
    });
};
