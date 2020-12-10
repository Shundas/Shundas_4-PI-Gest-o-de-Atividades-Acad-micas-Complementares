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
routes.put('/updateAtividade', AtividadeController.updateAtividade)

//Rota para criar comentário
routes.post('/criarComentarioAluno', ComentarioController.createComentarioAluno)

//Rota para listar comentário
routes.get('/listarComentario', ComentarioController.indexComentario)

//Verifica se usuário está ativo
routes.post('/verificaUsuario', UserController.usuarioAtivo)

routes.get('/perfis', UserController.perfil)
routes.get('/category', AtividadeController.category)
routes.get('/activity', AtividadeController.activity)

//reset senha
routes.post('/resetSenha', UserController.resetSenha)
routes.post('/resetSenhaColab', UserController.resetSenhaColab)

//Download Arquivo
routes.get('/download/:id', AtividadeController.downloadArq)

module.exports = routes
