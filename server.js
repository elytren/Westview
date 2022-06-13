const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport')
const PORT = 3000;


const homeRts = require('./routes/homeRts');
const reviewRts = require('./routes/reviewsRts');

app.use('/wv', homeRts);
app.use('/wv', reviewRts);

require('./config/passport');
require('./database/connection');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: 'Witch!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(express.static('./public/stylesheets'));
app.use(express.static('./public/images'));
app.use(express.static('./public/images/50s'));
app.use(express.static('./public/images/60s'));
app.use(express.static('./public/images/70s'));
app.use(express.static('./public/images/80s'));
app.use(express.static('./public/images/90s'));
app.use(express.static('./public/images/2000s'));


app.listen(PORT, ()=>{
    console.log(`Im listening on port ${PORT}`)
})

module.exports = app