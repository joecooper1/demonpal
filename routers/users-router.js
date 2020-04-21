const { getUser } = require("../controllers/users-controller");

const { methodDisallowed } = require("../controllers/api-controllers");
const usersRouter = require("express").Router();

usersRouter.route("/:username").get(getUser).all(methodDisallowed);

module.exports = { usersRouter };
