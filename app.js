//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    var today = new Date();

    var options = {
       wednesday : 'long',
       day: 'numeric',
       month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render('list', {
        kindof : day
    });
}); 

app.post('/', (req,res) => {
    console.log(req.body.newItem);
});

app.listen(3000, function(){
    console.log("PORT IS ACTIVE");
});