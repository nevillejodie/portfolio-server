const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const {sendEmail} = require('./mail')
var cors = require('cors')

app.use(cors())
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/health", (req, res) => {
    res.status(200).send("Hello I'm working!");
    res.header('Access-Control-Allow-Origin', '*');
  });

  app.post("/send", function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.body)

    sendEmail(req.body.email, req.body.name)

  })