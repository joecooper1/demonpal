const connection = require("../db/connection");

const selectDemonsByUser = (username = "%") => {
  return connection("demons")
    .select("*")
    .where("owner", "like", username)
    .then((demons) => {
      if (demons.length === 0)
        return Promise.reject({ status: 404, msg: "Not found" });
      else return demons;
    });
};

const selectUser = (username = "%") => {
  return connection("users")
    .select("*")
    .where("username", "like", username)
    .then((users) => {
      if (users.length === 0)
        return Promise.reject({ status: 404, msg: "Not found" });
      else return users[0];
    });
};

const selectUsers = () => {
  return connection("users").select("*");
};

const insertUser = (username) => {
  return connection("users").insert({ username }).returning("*");
};

module.exports = { selectUser, selectUsers, selectDemonsByUser, insertUser };
