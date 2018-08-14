const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)

// app.use(express.static(__dirname+'/static'))
app.use(express.static(__dirname + '/public/dist/public' ));

app.listen(3000, function(){
    console.log("Listening on port 3000");
});

