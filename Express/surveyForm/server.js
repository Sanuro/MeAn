var express = require("express");
var session = require("express-session")
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

console.log("Let's find out what app is", app);

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}))

app.get("/", function (request, response){

    response.render('index');
})

app.post("/results", function (request, response){

    request.session.name = request.body.name;
    request.session.dojo = request.body.dojo;
    request.session.language = request.body.language;
    request.session.comment = request.body.comment;
    console.log("###########################", request.session.name)

    response.render('results', {
        name: request.session.name,
        language: request.session.language,
        dojo: request.session.dojo,
        comment: request.session.comment

    })
})



app.listen(8000, function() {
  console.log("listening on port 8000");
})
