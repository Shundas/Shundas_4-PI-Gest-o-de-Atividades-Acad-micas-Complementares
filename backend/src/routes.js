const { Router } = require('express');
const UserController = require('./controllers/Admin/UserController');
const routes = Router();


// Index - representar | Create - criar | Show - mostrar apenas uma informação | Delete | Update

// Get - Requisitar | Post - Criar | Delete - deletar | Put - Editar


//Rota para Listar Atividades
routes.get('/listarAtividade', (req, res) => {
    res.send("oi");
});

// Rota para criar Aluno
routes.post('/criarAluno', UserController.createAluno)

// Rota para editar atividade
routes.put('/')


module.exports = routes;

