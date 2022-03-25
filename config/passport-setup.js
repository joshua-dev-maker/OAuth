const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys')

//options for google strategy
passport.use(
  new googleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (profile, done) => {      
    console.log("here!!!!!!!!!!!!!!");
    console.log(profile);

      // passport callback function
      // console.log('passport callback function fired:');
      // console.log(profile);
    }
  )
);
