require('./connection');
const Dec = require('../models/decade');
const decSeeds = require('./seeds.json');

Dec.deleteMany({})
.then(()=>{
    return Dec.insertMany(decSeeds)
    .then((decs)=>{
        console.log(decs)
    })
})
.finally(()=>{
    process.exit()
}) 