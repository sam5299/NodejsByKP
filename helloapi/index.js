const { json } = require('express');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

var movies = [{id:'1',title:'Tanhaji',hero:'ajay devgan'},{id:'2',title:'Bajirao Mastani',hero:'Ranveer singh'}];

app.get('/movies',(req,res)=>{
    
    res.json(movies);
});

app.post('/addMovie',(req,res)=>{
    newmovie = req.body;
    console.log("movie id:"+newmovie.id);
    movies.push(newmovie);
    res.send("done");
})

app.get('/',(req,res)=>{
    res.send("Sorry you didn't hit right api");
});

app.listen(3000,()=>{console.log('starting server at port number 3000...')});