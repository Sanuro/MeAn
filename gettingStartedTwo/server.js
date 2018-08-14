console.log("inside server.js yeet");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static( __dirname + "/client/gettingStartedTwo/dist/gettingStartedTwo"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(4444, function(){
    console.log("looking at 4444");
});