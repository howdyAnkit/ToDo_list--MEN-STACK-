//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");
const app = express();

const items = [];
const workItems = [];

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
    res.render('list', { listTitle : day, newListems : items });
}); 

app.post('/', (req,res) => {
    let item = req.body.newListems;

    if (req.body.list === 'work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }

});

app.get('/work', (req,res) => {
    res.render('list', {listTitle: "work list", newListems: workItems});
});



app.listen(3000, function(){
    console.log("PORT IS ACTIVE");
});