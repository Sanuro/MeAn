var express = require("express");
var app = express();

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'poop',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');
app.use(flash());

var path = require('path')

var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));

app.set('views', path.join(__dirname, '/views')); 
app.set('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})

require('./server/config/routes.js')(app)
require('./server/models/pokemon.js');