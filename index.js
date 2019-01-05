const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});



app.listen(process.env.port||3000,()=>{
    console.log("Now listening for request");
});