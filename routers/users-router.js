const {
  getUser,
  getUsers,
  getDemonsByUser,
  postUser,
} = require("../controllers/users-controller");

const { methodDisallowed } = require("../controllers/api-controllers");
const usersRouter = require("express").Router();

usersRouter.route("/").get(getUsers).post(postUser).all(methodDisallowed);
usersRouter.route("/:username").get(getUser).all(methodDisallowed);
usersRouter
  .route("/:username/demons")
  .get(getDemonsByUser)
  .all(methodDisallowed);

module.exports = usersRouter;
