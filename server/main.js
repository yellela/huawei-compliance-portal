const express = require('express');
const bodyparsar = require('body-parser');
const cros = require('cors');
const path = require('path');
const expbrs = require('express-handlebars');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const assert = require('assert');

var  port = 8002; 
var app = express();

app.use(bodyparsar.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

const testCaseController = require ('./app/controllers/TestcasesController');
const reports  = require ('./app/controllers/ReportsController');
const news = require('./app/controllers/NewsController')

var url = 'mongodb://localhost:27017/HuaweiPortalDb' // mongoDb connection URL




// Connecting to the database
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


/*app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',expbrs({ extname:'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');*/




app.use('/TestcaseList', testCaseController);//testcase controller
app.use('/Reports', reports)// repots controller
app.use('/News', news)

// start server 
app.listen( port,() => console.log(`Express server running at Port:${port}`));