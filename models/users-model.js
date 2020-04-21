const connection = require("../db/connection");

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

module.exports = { selectUser };
