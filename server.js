const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const normalizePort = require('normalize-port')
const PORT = normalizePort(process.env.PORT || '8080')



app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'Witch!',
    resave: false,
    saveUninitialized: true, 
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://elytren:sc4rl3tw@ga.hbas66o.mongodb.net/westview?retryWrites=true&w=majority',
        autoRemove: 'interval',
        autoRemoveInterval: 30
        })
    })
);
app.use(passport.initialize());
app.use(passport.session());

//give access to the session from any views folder
// app.use(function(req, res){
//     res.locals.session = req.session;
// })

require('./config/passport');
require('./database/connection');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const homeRts = require('./routes/homeRts');
const reviewRts = require('./routes/reviewsRts');
const userRts = require('./routes/userRoutes');
const cartRts = require('./routes/cartRts');
const { normalize } = require('path');


app.use('/wv', homeRts);
app.use('/wv', reviewRts);
app.use('/', userRts);
app.use('/wv', cartRts);

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));

app.use(express.static('./public/stylesheets'));
app.use(express.static('./public/images'));
app.use(express.static('./public/images/favicon_io'));
app.use(express.static('./public/images/50s'));
app.use(express.static('./public/images/60s'));
app.use(express.static('./public/images/70s'));
app.use(express.static('./public/images/80s'));
app.use(express.static('./public/images/90s'));
app.use(express.static('./public/images/2000s'));
app.use(express.static('./public/audio'));
app.use(express.static('./public/js'))

app.listen(PORT, ()=>{
    console.log(`Im listening on port ${PORT}`)
})

module.exports = app