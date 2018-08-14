
var Tasks = require('./../controllers/tasks.js')
module.exports = function(app){

// app.get('/',Tasks.index);
app.get('/tasks', Tasks.getAll);
app.get('/tasks/:id', Tasks.getOne);
app.post('/tasks', Tasks.create);
app.put('/tasks/:id', Tasks.update);
app.delete('/tasks/:id', Tasks.delete);

}