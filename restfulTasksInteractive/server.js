console.log("inside server.js yeet");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static( __dirname + "/client/restfulTasksInteractive/dist/restfulTasksInteractive"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(1111, function(){
    console.log("looking at 1111");
});