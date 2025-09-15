import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";


passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.NODE_ENV === "development"
                ? "http://localhost:5000/api/auth/google/callback"
                : "https://neevv.tech/api/auth/google/callback",
        },
        async(accessToken, refreshToken, profile, done) => {
            try{
                 const { id } = profile;
                 console.log("Google Profile:", profile);
                 let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                // create new user
                user = await User.create({
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value || "/avatar.png",
                    password: id
                });
                } else {
                user.profilePic = profile.photos?.[0]?.value || "/avatar.png";
                await user.save();
                }
                return done(null,user);
            }catch(error){
                return done(error,null);
            }
        }
    )
);
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser(async(id,done)=>{
    try {
        const user= await User.findById(id);
        done(null,user);
    } catch (error) {
        done(error,null);
    }
});
export default passport;