var User = require("../models/user");

module.exports = {
  async index(req, res, next) {
    const users = await User.find();
    if (users) {
      res.status(200).send(users);
    } else {
      err => res.status(500).send(err);
    }
  }
};
