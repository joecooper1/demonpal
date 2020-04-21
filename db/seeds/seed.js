const { userData } = require("../data/index.js");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const usersInsertions = knex("users").insert(userData);
      return Promise.all([usersInsertions]);
    });
};
