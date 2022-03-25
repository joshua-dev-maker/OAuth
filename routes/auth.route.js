const router = require("express").Router();
const passport = require("passport");
const express = require("express");
//auth for login
router.get("/login", (req, res) => {
  res.render("login");
});

//auth for logout
router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});

//auth for google signin
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
//callback for passport
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("you have reached the redirect uri");
});

module.exports = router;
