const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Set up passport for strategies
// Google Strategy including callback url

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
    })
);