const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/codeial_devlopment');
///there are diffrent enviorments used like devlopment,test and production enviorment


const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to mongo db"));


db.once('open',function(){
  console.log('connected to database :: Mongodb');
});