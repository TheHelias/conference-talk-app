const express = require('express');
const path = require('path');
const talkRouter = require('./routes/index')
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();

const mongoose = require('mongoose');

//The URL below isn't supposed to be there as it exposes sensitive information but I left it there to enable easy testing in case the reviewer wants to test it locally.
const dev_db_url = 'mongodb+srv://thElias:amunigun96%23@cluster0-o03gb.mongodb.net/innovations_conference?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', talkRouter);
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;
