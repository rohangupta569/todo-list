const express = require('express');
const port = 8000;
const app = express();

//setup the view engine 
app.set('view engine','ejs');
app.set('views' , './views');
app.use(express.urlencoded({extended: true}));

app.get('/',function(req,res){
    return res.render('home',{
        title:"To do list"
    });

});


app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on port : ${port}`);

});
