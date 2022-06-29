const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
 
    var result = num1 + num2;
    
    res.send("The Result of Calculation is "+result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var weight = parseFloat(req.body.n1);
    var height = parseFloat(req.body.n2);

    var resultW = (weight / (height*height));

    res.send("The BMI Is "+ resultW);
});
app.listen(port, function(err){
    if(err) console.log(err);
    console.log("connected to server at port", port);
});