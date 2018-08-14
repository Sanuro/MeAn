// Require the Express Module
var express = require('express');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/basic_mongoose");
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model("User", UserSchema);
var User = mongoose.model("User")

app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
// Use native promises
mongoose.Promise = global.Promise;

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        var nameAge = {
            name : req.body.name,
            age: req.body.age

        }

        res.redirect('/users') //{data: nameAge});
      }
    })
  })

app.get("/users", function(req, res){
    
    // console.log(req.body)
    res.render("users" ) ;
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
