const apiRouter = require("express").Router();
const {
  getEndpoints,
  methodDisallowed,
} = require("../controllers/api-controllers");

const usersRouter = require("./users-router");

apiRouter.use("/users", usersRouter);

apiRouter.route("/").get(getEndpoints).all(methodDisallowed);

module.exports = apiRouter;
