const crypto = require('crypto')
const knex = require('../../database/connection')
const yup = require('yup')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  //Alteração de Usuários com validação --OK
  async updateAluno(request, response) {
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
        .count('iduser as existe')
        .from('user')
        .where('email', email)
      var [{ existe }] = emailExiste

      if (!(await validatorName.isValid(request.body))) {
        return response.status(400).json({ error: 'Nome é campo obrigatório.' })
      }
      if (!(await validatorEmail.isValid(request.body))) {
        return response.status(400).json({ error: 'Email inválido.' })
      }
      if (!(await validatorCelular.isValid(request.body))) {
        return response.status(400).json({ error: 'Celular obrigatório.' })
      }

      const updateUser = await knex('user')
        .update({ name: name, email: email, celular: celular, phone: phone })
        .where('iduser', id)

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
          .json({ error: 'Senha atual e nova iguais!' })
      }
      if (!result) {
        return response.status(400).json({ error: 'Senha atual incorreta!' })
      }
      if (novaSenha !== confirmaSenha) {
        return response.status(400).json({ error: 'Senhas não conferem!' })
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

  // async resetSenhaAluno(request, response){

  // },

  async sessionAluno(request, response) {
    const data = request.body
    const verifica = await knex('user').count('email as existe').where('email', data['email']).where('isActive', true)
    var [{ existe }] = verifica

    if (existe === 1) {
      const aluno = await knex('user').select('*').where('email', data['email']).where('isActive', true)
      let [{ email, senha, iduser, senhaTemp, isReset }] = aluno
      if (isReset === 1) {
        await bcrypt.compare(data['senha'], senhaTemp).then(ctx => {
          if (ctx) {
            const token = jwt.sign(
              {
                userId: iduser,
                email: email,
                senha: senhaTemp,
              },
              process.env.APP_SECRET,
              { expiresIn: '1d' },
            )
            return response.status(200).json({ token: token })
          } else {
             bcrypt.compare(data['senha'], senha).then(ctx => {
              if (ctx) {
                const token = jwt.sign(
                  {
                    userId: iduser,
                    email: email,
                    senha: senha,
                  },
                  process.env.APP_SECRET,
                  { expiresIn: '1d' },
                )
                knex('user').update({ senhaTemp: ""}).where('iduser', iduser)
                return response.status(200).json({ token: token })
              } else {
                return response.status(400).json({ error: 'Usuário ou senha inválido3.' })
              }
            })
          }
        })
      } else {
        await bcrypt.compare(data['senha'], senha).then(ctx => {
          if (ctx) {
            const token = jwt.sign(
              {
                userId: iduser,
                email: email,
                senha: senha,
              },
              process.env.APP_SECRET,
              { expiresIn: '1d' },
            )
            return response.status(200).json({ token: token })
          } else {
            return response.status(400).json({ error: 'Usuário ou senha inválido2.' })
          }
        })
      }
    } else {
      return response.status(400).json({ error: 'Usuário ou senha inválidos1' })
    }
  },
}
