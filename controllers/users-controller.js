const {
  selectUser,
  selectUsers,
  selectDemonsByUser,
} = require("../models/users-model.js");

const getDemonsByUser = (req, res, next) => {
  const { username } = req.params;
  selectDemonsByUser(username)
    .then((demons) => {
      console.log(demons);
      res.status(200).send({ demons });
    })
    .catch((err) => next(err));
};

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

module.exports = { getUser, getUsers, getDemonsByUser };
