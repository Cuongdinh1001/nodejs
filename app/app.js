const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongodb_uri = "mongodb+srv://cuongdinh1001:KaitoKid1001@cluster0.4b3lu.mongodb.net/Demo?retryWrites=true&w=majority";
mongoose.connect(
    mongodb_uri, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, 
    (err) => {
    if (err) console.log(err);
    else console.log("Connect")
});

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const user = require('./routes/user');
app.use('/user', user)

app.listen(port, () => {
    console.log("Listening on port " + port);
});