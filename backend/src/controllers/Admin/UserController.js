const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

module.exports = {
  //Criação do usuário com validação --OK
  async createAluno(request, response, next) {
    try {
      const { name, email, phone, celular } = request.body
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
        id,
        name,
        email,
        phone,
        celular,
        senha: hash,
      })

      return response.json(user)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async createColaborador(request, response, next) {
    try {
      const { name, email, phone, celular, perfil } = request.body
      const validator = yup.object().shape({
        email: yup.string().email().required(),
        celular: yup.string().required(),
        perfil: yup.string().required(),
      })

      if (!(await validator.isValid(request.body))) {
        return response.status(400).json({ error: 'shunda' })
      }

      const id = crypto.randomBytes(8).toString('hex')
      const senha = crypto.randomBytes(4).toString('hex')
      const hash = await bcrypt.hash(senha, 10)

      const user = await knex('userSenai').insert({
        id,
        name,
        email,
        phone,
        celular,
        perfil,
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
      const { id } = request.params
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
        .where('id', id)

      return response.json(updateUser)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async updateColaborador(request, response) {
    try {
      const { name, email, phone, celular } = request.body
      const { id } = request.params
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
        .where('id', id)

      return response.json(updateUser)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },
}
