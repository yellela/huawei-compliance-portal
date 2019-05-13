const mongoose = require('mongoose');

const Reports = mongoose.model('Reports',{
    product:{
        type:String
    },
    Testcase:{
        type:String
    },
    Address:{
        type:String 
    },
    Reports:{
        type:String
    }
    
});

module.exports = { Reports };