const router = require('express').Router();
const passport = require('passport');

// auth login page
router.get('/login', (req, res) => {
    res.render('login', {user:req.user});
});

// auth with google
router.get('/google', passport.authenticate('google', {
    // Add more scope options?!
    scope:['profile']
}));

router.get('/google/redirect', (req, res) => {
    res.send('You reached callback!');
});

// logout
router.get('/logout', (req, res) => {
    //Logging out with passport
    res.send('Logging out');
});

module.exports = router;