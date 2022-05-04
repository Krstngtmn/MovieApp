const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const initialize = require("../config/passport-conf");
const passport = require("passport");

initialize(passport);

const checkUser = async (req, res) => {
  passport.authenticate("local", {
    successRedirect: "/#/movies",
    failureRedirect: "/#/login",
  })(req, res);
};

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.send(200);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { createUser, checkUser };
