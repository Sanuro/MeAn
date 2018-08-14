var express = require("express");
var session = require("express-session")
var app = express();
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
    if(!request.session.count){
        request.session.count = 1
    } else {
        request.session.count += 1
    }
    console.log(request.session.count)
    response.render('counter', {count: request.session.count});
})

app.get("/addTwo", function(request, response){
    request.session.count += 1
    console.log(request.session.count)

    response.redirect("/");
})

app.get("/clear", function(request, response){
    request.session.count = 0


    response.redirect("/");
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})
