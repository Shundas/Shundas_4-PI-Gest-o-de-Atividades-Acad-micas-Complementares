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

  async updateSenhaColaborador(request, response) {
    try {
      const { senhaAtual, novaSenha, confirmaSenha } = request.body
      const { id } = request.query
      const senhaBd = await knex
        .select('senha')
        .from('userSenai')
        .where('iduserSenai', id)
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

      const updateSenha = await knex('userSenai')
        .update({ senha: hash })
        .where('iduserSenai', id)
      await knex('userSenai')
        .update({ isReset: false })
        .where('iduserSenai', iduserSenai)
      return response.status(200).json({ msg: 'Senha alterada com sucesso!' })
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async sessionColaborador(request, response) {
    const data = request.body
    const verifica = await knex('userSenai')
      .count('email as existe')
      .where('email', data['email'])
      .where('isActive', true)
    var [{ existe }] = verifica

    if (existe === 1) {
      const colaborador = await knex('userSenai')
        .select('*')
        .where('email', data['email'])

      let [{ email, senha, iduserSenai, senhaTemp, isReset }] = colaborador

      if (isReset === 1) {
        await bcrypt.compare(data['senha'], senhaTemp).then(async ctx => {
          if (ctx) {
            const token = jwt.sign(
              {
                userId: iduserSenai,
                email: email,
                senha: senhaTemp,
              },
              process.env.APP_SECRET,
              { expiresIn: '1d' },
            )
            return response.status(200).json({ token: token, senhaTemp: true, userId: iduserSenai })
          } else {
            bcrypt.compare(data['senha'], senha).then(async ctx => {
              if (ctx) {
                const token = jwt.sign(
                  {
                    userId: iduserSenai,
                    email: email,
                    senha: senhaTemp,
                  },
                  process.env.APP_SECRET,
                  { expiresIn: '1d' },
                )
                await knex('userSenai')
                  .update({ isReset: false })
                  .where('iduserSenai', iduserSenai)
                return response
                  .status(200)
                  .json({ token: token, senhaTemp: true, userId: iduserSenai })
              } else {
                return response
                  .status(400)
                  .json({ error: 'Usuário ou senha inválido.*' })
              }
            })
          }
        })
      } else {
        await bcrypt.compare(data['senha'], senha).then(ctx => {
          if (ctx) {
            const token = jwt.sign(
              {
                userId: iduserSenai,
                email: email,
                senha: senha,
              },
              process.env.APP_SECRET,
              { expiresIn: '1d' },
            )
            return response.status(200).json({ token: token, senhaTemp: false, userId: iduserSenai })
          } else {
            return response
              .status(400)
              .json({ error: 'Usuário ou senha inválido.**' })
          }
        })
      }
    } else {
      return response
        .status(400)
        .json({ error: 'Usuário ou senha inválido.***' })
    }
  },

  async novaSenhaColab(request, response) {
    try {
      const { novaSenha, confirmaSenha } = request.body
      const { id } = request.query
      const reset = await knex
        .select('isReset')
        .from('userSenai')
        .where('iduserSenai', id)
      var [{ isReset }] = reset
      if (isReset === 1) {
        if (novaSenha !== confirmaSenha) {
          return response.status(400).json({ error: 'Senhas não conferem!' })
        }

        const hash = await bcrypt.hash(novaSenha, 10)
        const updateSenha = await knex('userSenai')
          .update({ senha: hash })
          .where('iduserSenai', id)
        await knex('userSenai')
          .update({ isReset: false })
          .where('iduserSenai', iduserSenai)
        return response
          .status(201)
          .json({ msg: 'Senha atualizada com sucesso!' })
      } else {
        return response.status(400).json({ error: 'Acesso não permitido.' })
      }
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async indexUser(request, response) {
    try {
      const result = await knex('userSenai').select('iduserSenai', 'name')
      return response.json(result)
    } catch (error) {
      return response.json({ error: error.message })
    }
  },

  async indexCoord(request, response) {
    try {
      const result = await knex('userSenai')
        .select('iduserSenai', 'name')
        .where('idrole', 1111)
      return response.json(result)
    } catch (error) { }
  },

  async indexAssist(request, response) {
    try {
      const result = await knex('userSenai')
        .select('iduserSenai', 'name')
        .where('idrole', 4444)
      return response.json(result)
    } catch (error) { }
  },
  async indexSec(request, response) {
    try {
      const result = await knex('userSenai')
        .select('iduserSenai', 'name')
        .where('idrole', 2222)
      return response.json(result)
    } catch (error) { }
  },

  async listaCargos(request, response) {
    try {
      const result = await knex('role').select('*')

      return response.json(result)
    } catch (error) {
      return response.json({ error: erros.message })
    }
  },

  async listaGalera(request, response) {

    try {

      const { idrole } = request.query
      const shunda = await knex('userSenai').select('iduserSenai', 'name').where('idrole', idrole)

      return response.json(shunda)

    } catch (error) {
      return response.json({ error: erros.message })
    }
  }

}
