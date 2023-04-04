const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const PORT = 3000;
app.set('view engine', 'ejs');

let plNames = [];

app.get("/", function(req, res){
    res.render("index",{pageTitle:"Home Page", plNameKey:plNames});
});

app.get("/about", function(req, res){
    res.render("about",{pageTitle:"About Us"});
});

app.post("/", function(req, res){
    let plName = req.body.plName;
    plNames.push(plName);
    res.redirect("/");
});

app.listen(PORT, function(){
    console.log(`apps is running with ${PORT} port`);
});