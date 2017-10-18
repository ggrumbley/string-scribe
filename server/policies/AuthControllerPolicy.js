const Joi = require('joi');

exports.register = (req, res, next) => {
  const schema = {
    email: Joi.string().email(),
    password: Joi.string().regex(
      new RegExp('^[a-zA-Z0-9]{8,32}$')
    )
  }

  const { error, value } = Joi.validate(req.body , schema)

  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({ error: 'You must provide a valid email address' })
        break;

      case 'password':
        res.status(400).send({
          error: `
            Password provided failed to match the following rules:
            <br>
            1. it must contain only letters and numbers.
            <br>
            2. It must be between 8 and 32 characters in length.
          `
        })
        break;
      default:
        res.status(400).send({ error: 'KABOOOOOM!' });
        break;
    }
  } else {
    next();
  }
}
