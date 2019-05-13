const mongoose = require('mongoose');

const news = mongoose.model('news',{
    title:{
        type:String
    },
    news:{
        type:String
    }
    
});

module.exports = { news };