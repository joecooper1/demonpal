const getEndpoints = (req, res, next) => {
  const possibleEndpoints = {};
  res.status(200).send(JSON.stringify(possibleEndpoints));
};

const methodDisallowed = (req, res, next) => {
  res.status(405).send({ msg: "Method not allowed" });
};

module.exports = { getEndpoints, methodDisallowed };
