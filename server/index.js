const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/index.js');
const eventRouter = require('./routes/event-router');
const aboutRouter = require('./routes/about-router');
// const fileUpload = require("express-fileupload");
const path = require('path');
const app = express();
const fs = require('fs');
const port = 5000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

// app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, './public')));


// app.use('/uploads', express.static('uploads'));
/* File Upload Middleware*/
// app.use(fileUpload());

// app.use(fileUpload());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('!');
});

app.use('/api', eventRouter);
app.use('/api', aboutRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});