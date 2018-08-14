console.log("inside server.js");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const path = require("path");



app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist/gettingStarted' ));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// app.set('views', path.join(__dirname, '/views'));  
// app.set('view engine', 'ejs');


// app.get('/', function(req, res){
//     res.render("index");
// })

app.listen(8000, function(){
    console.log("Listening on port 8000");
});
