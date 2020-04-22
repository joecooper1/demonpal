const {
  selectDemon,
  insertDemon,
  updateDemon,
} = require("../models/demons-model.js");

const getDemon = (req, res, next) => {
  const { demon_id } = req.params;
  selectDemon(demon_id)
    .then((demon) => {
      console.log(demon);
      res.status(200).send({ demon });
    })
    .catch((err) => next(err));
};

const postDemon = (req, res, next) => {
  insertDemon(req.body)
    .then((demon) => {
      console.log(demon);
      res.status(201).send({ demon: demon[0] });
    })
    .catch((err) => next(err));
};

const patchDemon = (req, res, next) => {
  const { demon_id } = req.params;
  updateDemon(demon_id, req.body)
    .then((demon) => {
      console.log(demon);
      res.status(200).send({ demon: demon[0] });
    })
    .catch((err) => next(err));
};

module.exports = { getDemon, postDemon, patchDemon };
