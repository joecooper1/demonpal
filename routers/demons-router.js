const { getDemon } = require("../controllers/demons-controller");

const { methodDisallowed } = require("../controllers/api-controllers");
const demonsRouter = require("express").Router();

demonsRouter.route("/:demon_id").get(getDemon).all(methodDisallowed);

module.exports = demonsRouter;
