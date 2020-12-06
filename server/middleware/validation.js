module.exports = (schema) => (req, res, next) => {
  if (req.body.location) req.body.location = JSON.parse(req.body.location);

  const result = schema.validate(req.body);
  if (result.error) {
    console.log("validation Error-", result.error.details[0].message);
    return res.status(400).send({ error: result.error.details[0].message });
  }
  next();
};
