const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const mongoClient = require('mongodb').MongoClient;
const config = require('./config');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/app', routes);

mongoose.connect(config.NODE_SERVER).then((data) => {
    console.log("Connected to Database");
}).catch((error) => {
    console.log(error);
});

app.listen(process.env.PORT || 5000);