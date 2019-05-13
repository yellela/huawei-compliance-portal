const express = require ('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { news } = require('../models/news.model')


//getting news
router.get('/',(req,res)=>{
    //res.json('appWorking');
    news.find((err,docs) => {
        if(!err){
            res.send(docs);
        }
        else {
            console.log('Error in Receving News:' +JSON.stringify(err,undefined,2));
        }
    });
});

//adding new news
router.post('/',(req,res)=>{
    var List = new news({
        title:req.body.title,
        news:req.body.news,
    });
    List.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else {
            console.log('Error in Saving news:' +JSON.stringify(err,undefined,2));
        }
    })

});

module.exports = router;