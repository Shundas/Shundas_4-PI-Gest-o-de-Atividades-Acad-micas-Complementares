const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  async updateColaborador(request, response) {
    try {
      const { name, email, phone, celular } = request.body
      const { id } = request.query
      const validatorName = yup
        .object()
        .shape({ name: yup.string().required() })
      const validatorEmail = yup
        .object()
        .shape({ email: yup.string().email().required() })
      const validatorCelular = yup
        .object()
        .shape({ celular: yup.string().required() })

      const emailExiste = await knex
        .count('iduserSenai as existe')
        .from('userSenai')
        .where('email', email)
      var [{ existe }] = emailExiste
      if (existe > 0) {
        return response.status(400).json({ error: 'Email já cadastrado.' })
      }

      if (!(await validatorName.isValid(request.body))) {
        return response.status(400).json({ error: 'Nome é campo obrigatório.' })
      }
      if (!(await validatorEmail.isValid(request.body))) {
        return response.status(400).json({ error: 'Email inválido.' })
      }
      if (!(await validatorCelular.isValid(request.body))) {
        return response.status(400).json({ error: 'Celular obrigatório.' })
      }

      const updateUser = await knex('userSenai')
        .update({ name: name, email: email, celular: celular, phone: phone })
        .where('iduserSenai', id)

      return response.json(updateUser)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async sessionColaborador(request, response) {
    const data = request.body
    const colaborador = await knex('userSenai')
      .select('*')
      .where('email', data['email'])

    let [{ email, senha, iduserSenai }] = colaborador

    await bcrypt.compare(data['senha'], senha).then(ctx => {
      if (ctx) {
        const token = jwt.sign(
          {
            userId: iduserSenai,
            email: email,
            senha: senha,
          },
          process.env.APP_SECRET,
          { expiresIn: '7d' },
        )

        return response.status(200).json({ token: token })
      } else {
        return response.status(400).json({ error: 'Falha no Login' })
      }
    })
  },
}
