const { selectDemon } = require("../models/demons-model.js");

const getDemon = (req, res, next) => {
  const { demon_id } = req.params;
  selectDemon(demon_id)
    .then((demon) => {
      console.log(demon);
      res.status(200).send({ demon });
    })
    .catch((err) => next(err));
};

module.exports = { getDemon };
