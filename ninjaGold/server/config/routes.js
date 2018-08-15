
var Golds = require('./../controllers/golds.js')
module.exports = function(app){

app.get("/gold", Golds.getGold);
app.post("/gold", Golds.createGold);
app.put("/gold", Golds.update);
}