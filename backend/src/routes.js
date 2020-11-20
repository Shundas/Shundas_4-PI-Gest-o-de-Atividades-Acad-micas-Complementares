const { Router } = require('express');

const multer = require("multer");
const multerconfig = require('./config/multer');

const UserController = require('./controllers/Admin/UserController');
const AtividadeController = require('./controllers/Atividade/AtividadeController');
const ComentarioController = require('./controllers/Comentario/ComentarioController');
const routes = Router();


// Index - representar | Create - criar | Show - mostrar apenas uma informação | Delete | Update
// Get - Requisitar | Post - Criar | Delete - deletar | Put - Editar


// Rotas para criação de Usuários
routes.post('/criarAluno', UserController.createAluno)
routes.post('/criarColaborador', UserController.createColaborador)

//Rotas para alteração de Usuários
routes.put('/updateAluno', UserController.updateAluno)
routes.put('/updateColaborador', UserController.updateColaborador)

//Rotas para listar Usuários
routes.get('/consultaColaborador', UserController.consultaColaborador)
routes.get('/consultaAluno', UserController.consultaAlunos)

//Rota para redefinição de Senha
routes.patch('/UpdateSenhaAluno', UserController.UpdateSenhaAluno)

//Criar Atividade
routes.post('/criarAtividade', multer(multerconfig).single('file'), AtividadeController.createAtividade)
routes.post('/criarAtividadeSenai', AtividadeController.createAtividadeSenai)

//Rota para listar Atividades com Filtro
routes.get('/listarAtividade', AtividadeController.indexAtividade)
routes.get('/visualizarAtividade', AtividadeController.visualizarAtividade)

//Rota para criar comentário
routes.post('/criarComentarioAluno', ComentarioController.createComentarioAluno)

module.exports = routes;

