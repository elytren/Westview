const Dec = require('../models/decade')


const index = (req, res)=>{
    Dec.find({}, (err, decs)=>{
        res.render('main', {decs})
    })
}

const show = (req, res)=>{
    Dec.findById(req.params.decadeId).then((dec)=>{
        res.render('showDec', {dec})
    })
}

const showA = (req, res)=>{
    res.render('about')
}



module.exports = {
    index, 
    show, 
    showA
}