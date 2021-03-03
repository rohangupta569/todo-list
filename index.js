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
app.get('/' , function(req,res){

    Todo.find({},function(err,todos){
        if(err){
            console.log('error' , err);
            return ;
        }
        return res.render('home',{
            title : "TODO App",
            todo_list :todos
        });
    });

});

//This is url for creating task in database
app.post('/create-todo',function(req , res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err,newtodo){
        if (err) {
            console.log('error in creating task', err);
            return;
        }
        return res.redirect('back');
    })
});




//server
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on port : ${port}`);

});
