const express = require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');




//static files

app.use(express.static('./assets'));

//use layouts here
app.use(expressLayouts);


//use express router
app.use('/',require('./routes'));

///setup the view engin
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
  if(err){
    console.log(`Error in running the server:${err}`);
  }
  console.log(`server is running on port :${port}`);
});