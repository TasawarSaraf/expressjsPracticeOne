const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res)=>{
    // no matter it will find the directory path no matter the computer and find the index.html
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req,res)=>{
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2
    res.send("Thanks for sending that! The result of the calculation is: " + result);
})


app.get("/bmiCalculator", (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", (req,res)=>{
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    var bmi = weight / (height * height) 
    res.send("The result of the bmi is: " + bmi);
})