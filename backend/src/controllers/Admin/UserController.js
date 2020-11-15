const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

module.exports = {
  //Criação do usuário com validação --OK
  async createAluno(request, response, next) {
    try {
      const { name, email, phone, celular, isActive } = request.body
      const validator = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        celular: yup.string().required(),
      })

      if (!(await validator.isValid(request.body))) {
        return response.status(400).json({ error: 'shunda' })
      }

      const id = crypto.randomBytes(8).toString('hex')
      const senha = crypto.randomBytes(4).toString('hex')
      const hash = await bcrypt.hash(senha, 10)

      const user = await knex('user').insert({
        iduser: id,
        name,
        email,
        phone,
        celular,
        senha: hash,
        isActive: true,
      })
      console.log(senha)
      return response.json(user)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async createColaborador(request, response, next) {
    try {
      const { name, email, phone, celular, idrole } = request.body
      const validator = yup.object().shape({
        email: yup.string().email().required(),
        celular: yup.string().required(),
        idrole: yup.string().required(),
      })

      if (!(await validator.isValid(request.body))) {
        return response.status(400).json({ error: 'shunda' })
      }

      const id = crypto.randomBytes(8).toString('hex')
      const senha = crypto.randomBytes(4).toString('hex')
      const hash = await bcrypt.hash(senha, 10)

      const user = await knex('userSenai').insert({
        iduserSenai: id,
        name,
        email,
        phone,
        celular,
        idrole,
        senha: hash,
      })

      return response.json(user)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async updateAluno(request, response) {
    try {
      const { name, email, phone, celular } = request.body
      const { id } = request.query
      const validator = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        celular: yup.string().required(),
      })
      if (!(await validator.isValid(request.body))) {
        return response.status(400).json({ error: 'shunda' })
      }

      const updateUser = await knex('user')
        .update({ name: name, email: email, celular: celular, phone: phone })
        .where('iduser', id)

      return response.json(updateUser)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async updateColaborador(request, response) {
    try {
      const { name, email, phone, celular } = request.body
      const { id } = request.query
      const validator = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        celular: yup.string().required(),
      })
      if (!(await validator.isValid(request.body))) {
        return response.status(400).json({ error: 'shunda' })
      }

      const updateUser = await knex('userSenai')
        .update({ name: name, email: email, celular: celular, phone: phone })
        .where('iduserSenai', id)

      return response.json(updateUser)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async UpdateSenhaAluno(request, response) {
    try {
      const { senhaAtual, novaSenha, confirmaSenha } = request.body
      const { id } = request.query
      const senhaBd = await knex
        .select('senha')
        .from('user')
        .where('iduser', id)
      var [{ senha }] = senhaBd
      console.log(senha)
      const result = await bcrypt.compare(senhaAtual, senha)
      console.log(result)

      if (senhaAtual === novaSenha) {
        return response
          .status(400)
          .json({ error: 'Senha atual e nova iguais! Seu boca moli.' })
      }
      if (!result) {
        return response
          .status(400)
          .json({ error: 'Senha atual incorreta! Seu boca moli.' })
      }
      if (novaSenha !== confirmaSenha) {
        return response
          .status(400)
          .json({ error: 'Senhas não conferem! Seu boca moli.' })
      }

      const hash = await bcrypt.hash(novaSenha, 10)

      const updateSenha = await knex('user')
        .update({ senha: hash })
        .where('iduser', id)

      return response.json(updateSenha)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },
}
