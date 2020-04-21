const connection = require("../db/connection");

const selectDemon = (demon_id = "%") => {
  return connection("demons")
    .select("*")
    .where("demon_id", "like", demon_id)
    .then((demons) => {
      if (demons.length === 0)
        return Promise.reject({ status: 404, msg: "Not found" });
      else return demons[0];
    });
};

module.exports = { selectDemon };
