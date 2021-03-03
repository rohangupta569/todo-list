const mongoose = require('mongoose');

//Schema for todo list object (task)
const todoSchema = new mongoose.Schema({

    description :{
        type : String,
        require :true
    },
    category :{
        type : String,
        require:true
    },
    date :{
        type : Date,
        require :true
    }
});

//Creating mongoose model for this schema
const Todo = mongoose.model('Todo', todoSchema);

//Exporting the model 'todo' with the schema , to be used in index.js
module.exports = Todo;