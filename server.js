const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const PORT = 3000
const homeRts = require('./routes/homeRts')
const reviewRts = require('./routes/reviewsRts')

require('./database/connection')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

app.use('/wv', homeRts)
app.use('/wv', reviewRts)
//ROUTES START 





//ROUTES END



app.listen(PORT, ()=>{
    console.log(`Im listening on port ${PORT}`)
})