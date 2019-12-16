var controller = require('../controllers/livros.js');

app.get('/livros/menulivros', controller.menulivros);

app.get('/livros/livrosListar', controller.livrosListar);

app.get('/livros/novo', controller.livrosNovo);

app.post('/livros/salvar', controller.livrosSalvar);

app.get('/livros/editar/:codigo', controller.livrosBuscar);

app.get('/livros/inativar/:codigo', controller.livrosInativar);
