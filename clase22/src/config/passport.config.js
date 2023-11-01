import passport from "passport";
import jwt from "passport-jwt";

const JWTStrategy = jwt.Strategy;
const cookieExtractor = (req) =>
  req && req.signedCookies ? req.signedCookies["jwt-coder"] : null;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: jwt.ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: "secret",
      },
      async (jwt_payload, done) => {
        try {
          if (jwt_payload.user.role === "admin") return done(null, jwt_payload);
          else return done(null, "error");
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

export default initializePassport;
