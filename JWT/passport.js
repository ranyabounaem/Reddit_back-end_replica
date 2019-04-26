const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const JWT  = require("./giveToken");
const User = require("../models/UserSchema");

passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("auth"),
      secretOrKey: JWT.secret
    },
    async (payLoad, done) => {
      try {
        //find if user exists
        const user = await User.findOne({ Username: payLoad.sub });
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
