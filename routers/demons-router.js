const { getDemon, postDemon } = require("../controllers/demons-controller");

const { methodDisallowed } = require("../controllers/api-controllers");
const demonsRouter = require("express").Router();

demonsRouter.route("/:demon_id").get(getDemon).all(methodDisallowed);
demonsRouter.route("/").post(postDemon).all(methodDisallowed);

module.exports = demonsRouter;
