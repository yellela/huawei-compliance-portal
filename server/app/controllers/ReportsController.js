const express = require ('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Reports } = require('../models/reports.model');

//getting Reports
router.get('/',(req,res)=>{
    //res.json('appWorking');
    Reports.find((err,docs) => {
        if(!err){
            res.send(docs);
        }
        else {
            console.log('Error in Receving Reports:' +JSON.stringify(err,undefined,2));
        }
    });
});

//get report by ID

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Reports on This Id:  ${req.params.id}`);

    Reports.findById(req.params.id,(err,doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('Error in getting TestcaseByID:' +JSON.stringify(err,undefined,2));
        }
    });

});

//adding new reports
router.post('/',(req,res)=>{
    var List = new Reports({
        product:req.body.product,
        Testcase:req.body.Testcase,
        Address:req.body.Address,
        Reports:req.body.Reports
    });
    List.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else {
            console.log('Error in Saving reports:' +JSON.stringify(err,undefined,2));
        }
    })

});

//Update reports By ID

router.put('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Testcase on This Id:  ${req.params.id}`);

    var List = {
        product:req.body.product,
        Testcase:req.body.Testcase,
        Address:req.body.Address,
        Reports:req.body.Reports
    }

    Reports.findOneAndUpdate(req.params.id , { $set:List },{new: true},(err, docs)=>{
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

    Reports.findOneAndDelete(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Deleting TestcaseByID:' +JSON.stringify(err,undefined,2));
        }
    })

});


module.exports = router;