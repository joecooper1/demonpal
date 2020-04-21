const apiRouter = require("express").Router();
const {
  getEndpoints,
  methodDisallowed,
} = require("../controllers/api-controllers");

const usersRouter = require("./users-router");
const demonsRouter = require("./demons-router");

apiRouter.use("/users", usersRouter);
apiRouter.use("/demons", demonsRouter);

apiRouter.route("/").get(getEndpoints).all(methodDisallowed);

module.exports = apiRouter;
