const apiRouter = require("express").Router();
const {
  getEndpoints,
  methodDisallowed,
} = require("../controllers/api-controllers");

apiRouter.route("/").get(getEndpoints).all(methodDisallowed);

module.exports = apiRouter;
