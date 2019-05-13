const express = require ('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { TestcaseList } = require('../models/Testcases.model')


//getting TestcaseList
router.get('/',(req,res)=>{
    //res.json('appWorking');
    TestcaseList.find((err,docs) => {
        if(!err){
            res.send(docs);
        }
        else {
            console.log('Error in Receving TestcaseList:' +JSON.stringify(err,undefined,2));
        }
    });
});

//get TestCase by ID

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Testcase on This Id:  ${req.params.id}`);

    TestcaseList.findById(req.params.id,(err,doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('Error in getting TestcaseByID:' +JSON.stringify(err,undefined,2));
        }
    });

});

//Update Testcase By ID

router.put('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
    
    return res.status(400).send(`No Testcase on This Id:  ${req.params.id}`);

    var List = {
        Desc:req.body.Desc,
        Case:req.body.Case,
    }

TestcaseList.findOneAndUpdate(req.params.id , { $set:List },{new: true},(err, docs)=>{
    if(!err) {
        res.send(docs)
    }
    else{
        console.log('Error in upDating TestcaseByID:' +JSON.stringify(err,undefined,2));
    }
});

});

//Delete Testcase By Id

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Testcase on This Id:  ${req.params.id}`);

    TestcaseList.findOneAndDelete(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Deleting TestcaseByID:' +JSON.stringify(err,undefined,2));
        }
    })

});

//adding new Testcase
router.post('/',(req,res)=>{
    var List = new TestcaseList({
        Desc:req.body.Desc,
        Case:req.body.Case,
    });
    List.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else {
            console.log('Error in Saving TestcaseList:' +JSON.stringify(err,undefined,2));
        }
    })

})

module.exports = router;