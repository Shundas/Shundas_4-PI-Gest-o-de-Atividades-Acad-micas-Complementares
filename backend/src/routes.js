const { Router } = require('express')

const multer = require('multer')
const multerconfig = require('./config/multer')

const UserController = require('./controllers/Admin/UserController')
const AtividadeController = require('./controllers/Atividade/AtividadeController')
const ComentarioController = require('./controllers/Comentario/ComentarioController')
const AlunoController = require('./controllers/Aluno/AlunoController')
const ColaboradorController = require('./controllers/Colaborador/ColaboradorController')
const routes = Router()

// Index - representar | Create - criar | Show - mostrar apenas uma informação | Delete | Update
// Get - Requisitar | Post - Criar | Delete - deletar | Put - Editar

// Rotas para criação de Usuários
routes.post('/criarAluno', UserController.createAluno)
routes.post('/criarColaborador', UserController.createColaborador)

// Rotas para logins de Usuarios (Aluno, Colaborador)
routes.post('/aluno-login', AlunoController.sessionAluno)
routes.post('/colaborador-login', ColaboradorController.sessionColaborador)

//Rotas para alteração de Usuários
routes.put('/updateAluno', AlunoController.updateAluno)
routes.put('/AdminUpdateAluno', UserController.updateAluno)
routes.put('/updateColaborador', ColaboradorController.updateColaborador)

//Rotas para listar Usuários
routes.get('/consultaColaborador', UserController.consultaColaborador)
routes.get('/consultaAluno', UserController.consultaAlunos)

//Rota para redefinição de Senha
routes.patch('/UpdateSenhaAluno', AlunoController.UpdateSenhaAluno)

//Criar Atividade
routes.post(
  '/criarAtividade',
  multer(multerconfig).single('file'),
  AtividadeController.createAtividade,
)
routes.post('/criarAtividadeSenai', AtividadeController.createAtividadeSenai)

//Rota para listar Atividades com Filtro
routes.get('/listarAtividade', AtividadeController.indexAtividade)
routes.get('/visualizarAtividade/:id', AtividadeController.visualizarAtividade)

//Rota para alterar Atividade
routes.put('/updateAtividade/:id', AtividadeController.updateAtividade)

//Rota para criar comentário
routes.post('/criarComentarioAluno', ComentarioController.createComentarioAluno)

//Rota para listar comentário
routes.get('/listarComentario', ComentarioController.indexComentario)

//Listagem
routes.get('/perfis', UserController.perfil)
routes.get('/category', AtividadeController.category)
routes.get('/activity', AtividadeController.activity)
routes.get('/status', AtividadeController.indexStatus)
routes.get('/userSenai', ColaboradorController.indexUser)
routes.get('/userCoord', ColaboradorController.indexCoord)
routes.get('/userAssist', ColaboradorController.indexAssist)
routes.get('/userSec', ColaboradorController.indexSec)
routes.get('/userAluno', AlunoController.indexAluno)
routes.get('/listaCoordenadores', AtividadeController.listaCoordenadores)
routes.get('/listaSecretaria', AtividadeController.listaSecretaria)
routes.get('/listaAssistentes', AtividadeController.listaAssistentes)

//Download Arquivo
routes.get('/download/:id', AtividadeController.showFile)

//Calcula horas
routes.get('/calculaHoras', AtividadeController.calculaHoras)

//reset senha
routes.post('/resetSenha', UserController.resetSenha)
routes.post('/resetSenhaColab', UserController.resetSenhaColab)
routes.post('/novaSenhaAluno', AlunoController.novaSenhaAluno)
routes.post('/novaSenhaColab', ColaboradorController.novaSenhaColab)

//Fluxo de aprovação e rejeição
routes.post('/encaminhaCoordenador', AtividadeController.encaminhaCoordenador)
routes.post('/rejeitaAtividade', AtividadeController.rejeitaAtividade)
routes.post('/aprovaAtividade', AtividadeController.aprovaAtividade)
routes.post('/concluiAtividade', AtividadeController.concluiAtividade)


module.exports = routes
