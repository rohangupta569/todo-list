const express = require('express');
const port = 8000;
const app = express();

//connecting to the database
const db = require('./config/mongoose');

//Import the Todo object from the models
const Todo = require('./models/todo');

//using ejs as template engine 
app.set('view engine','ejs');

//set the path of the views directory
app.set('views' , './views');

//for decoding url
app.use(express.urlencoded({extended: true}));

//home page url
app.get('/',function(req,res){
    return res.render('home',{
        title:"To do list"
    });

});

//server
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on port : ${port}`);

});
