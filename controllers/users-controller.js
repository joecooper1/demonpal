const { selectUser, selectUsers } = require("../models/users-model.js");

const getUsers = (req, res, next) => {
  selectUsers()
    .then((users) => {
      console.log(users);
      res.status(200).send({ users });
    })
    .catch((err) => next(err));
};

const getUser = (req, res, next) => {
  const { username } = req.params;
  selectUser(username)
    .then((user) => {
      console.log(user);
      res.status(200).send({ user });
    })
    .catch((err) => next(err));
};

module.exports = { getUser, getUsers };
