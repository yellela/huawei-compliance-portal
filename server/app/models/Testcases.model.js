const mongoose = require('mongoose');

const TestcaseList = mongoose.model('TestcaseList',{
    Desc:{
        type:String
    },
    Case:{
        type:String
    }
});

module.exports = { TestcaseList };