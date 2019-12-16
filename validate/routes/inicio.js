var controller = require('../controllers/inicio.js');

//app.get('/', controller.parcial);

app.get('/', controller.index);

app.get('/inicio/menubanco', controller.menubanco);

app.post('/login', controller.index);

app.get('/login', controller.index);

app.get('/logout', controller.logout);



