//require the library
const mongoose = require('mongoose');

//connect to the database
//mongoose.connect('mongodb://localhost/todo_list_db',{useNewUrlParser: true, useUnifiedTopology: true});
const uri = "mongodb+srv://rohangupta569:Rohan@1234@cluster0.fdqlz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});
//acquire the connection (to check if its successful)
const db = mongoose.connection; 

//if error print this
db.on('error',console.error.bind(console , 'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to database');
});