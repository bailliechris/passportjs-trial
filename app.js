require('dotenv').config();
const express = require('express');
const auth_routes = require('./routes/auth');
const passportSetup = require('./config/passport-setup');

const app = express();

//No front end here so doing via ejs
//set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', auth_routes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Listening @ 3000')
});