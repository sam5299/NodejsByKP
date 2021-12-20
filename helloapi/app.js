var express = require('express');
const app = express();

app.get('/',function(req,res){res.send("Hello nodejs");})

app.get('/msg',(req,res)=>{
    console.log("at line no 7");
    res.status(200).send("Response sent ok");
})

app.listen(3000,()=>{console.log("starting web server")});