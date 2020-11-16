const { Router } = require('express');

const multer = require("multer");
const multerconfig = require('./config/multer');

const UserController = require('./controllers/Admin/UserController');
const AlunoController = require('./controllers/Aluno/AlunoController');
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
routes.post('/criarAtividade', multer(multerconfig).single('file'), AlunoController.createAtividade)
routes.post('/criarAtividadeSenai', AlunoController.createAtividadeSenai)

//Rota para listar Atividades com Filtro
routes.get('/listarAtividade', AlunoController.indexAtividade)


module.exports = routes;

