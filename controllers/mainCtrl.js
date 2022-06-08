const Dec = require('../models/decade')



const main = (req, res)=>{
    Dec.find({}, (err, decs)=>{
        res.render('main', {decs})
    })
}

const show = (req, res)=>{
    Dec.findById(req.params.decadeId).then((dec)=>{
        res.render('showDec', {dec})
    })
}





module.exports = {
    main, 
    show


}