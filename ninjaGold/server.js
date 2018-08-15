console.log("inside server.js yeet");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const flash = require('express-flash');


app.use(flash());
app.use(bodyParser.json());
app.use(express.static( __dirname + "/client/ninjaGold/dist/ninjaGold"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(3333, function(){
    console.log("looking at 3333");
});