//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");
const app = express();
const items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/', (req,res) => {
    var today = new Date();

    var options = {
       wednesday : 'long',
       day: 'numeric',
       month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render('list', { kindof : day, newItem : items })
    ;
}); 

app.post('/', (req,res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("PORT IS ACTIVE");
});