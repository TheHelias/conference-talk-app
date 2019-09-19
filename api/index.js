//import talkAppApi from './routes/index';
const express = require('express');
const path = require('path');
const talkRouter = require('./routes/index')
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();

const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://thElias:amunigun96%23@cluster0-o03gb.mongodb.net/innovations_conference?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// require('./routes/index')(app);
//An api endpoint that returns a short list of items

app.use('/', talkRouter);
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
// require('./routes/index')(app);
// app.use('/ass/vdfd', talkRouter)

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;