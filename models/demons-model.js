const connection = require("../db/connection");

const selectDemon = (demon_id = "%") => {
  return (
    connection("demons")
      .select("*")
      // .where("demon_id", demon_id)
      .then((demons) => {
        if (demons.length === 0)
          return Promise.reject({ status: 404, msg: "Not found" });
        else return demons[0];
      })
  );
};

const insertDemon = (body) => {
  return connection("demons").insert(body).returning("*");
};

const updateDemon = (demon_id, body) => {
  return connection("demons")
    .where("demon_id", demon_id)
    .update(body)
    .returning("*");
};

module.exports = { selectDemon, insertDemon, updateDemon };
