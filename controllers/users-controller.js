const {
  selectUser,
  selectUsers,
  selectDemonsByUser,
  insertUser,
  removeUser,
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

const postUser = (req, res, next) => {
  const { username } = req.body;
  insertUser(username)
    .then((user) => {
      console.log(user);
      res.status(201).send({ user: user[0] });
    })
    .catch((err) => next(err));
};

const deleteUser = (req, res, next) => {
  const { username } = req.params;
  removeUser(username)
    .then((count) => {
      res.status(204).send();
    })
    .catch((err) => next(err));
};

module.exports = { getUser, getUsers, getDemonsByUser, postUser, deleteUser };
