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

// USE THE CSS AND JAVASCRIPT FILE
app.use(express.static('assets'));

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


// THIS IS DELETE URL FOR SINGLE TASK FROM DATABASE
app.get('/delete_todo_single', function(req, res) {
    let id = req.query.id;
    Todo.findByIdAndDelete(id, function(err){
        if(err) {
            console.log("error");
            return;
        }
        return res.redirect('back');
    });
});

// THIS IS URL TO DELETE THE MULTIPLE ITEM FROM DATABASE
app.post('/delete-todo', function(req, res) {
    let ids = req.body.task;
    // if single task is to be deleted
    if (typeof(ids) == "string") {
        Todo.findByIdAndDelete(ids, function(err) {
            if (err) { 
                console.log("error in deleting"); 
                return; 
            }
        });
    } else {    // if multiple task is to be deleted
        for (let i = 0; i < ids.length; i++) {
            Todo.findByIdAndDelete(ids[i], function (err) {
                if (err) { 
                    console.log("error in deleting");
                    return; 
                }
            });
        }
    }
    return res.redirect('back');
});



//server
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on port : ${port}`);

});
