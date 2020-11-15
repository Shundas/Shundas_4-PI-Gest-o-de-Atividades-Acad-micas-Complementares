const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer');


module.exports = {

  //Criação de Usuários com validação --OK
  async createAluno(request, response, next) {
    try {
      const { name, email, phone, celular } = request.body
      const validatorName = yup.object().shape({ name: yup.string().required() })
      const validatorEmail = yup.object().shape({ email: yup.string().email().required() })
      const validatorCelular = yup.object().shape({ celular: yup.string().required() })

      const emailExiste = await knex.count("iduser as existe").from("user").where("email", email)
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

      return response.json(user)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async createColaborador(request, response, next) {
    try {
      const { name, email, phone, celular, idrole } = request.body
      const validatorName = yup.object().shape({ name: yup.string().required() })
      const validatorEmail = yup.object().shape({ email: yup.string().email().required() })
      const validatorCelular = yup.object().shape({ celular: yup.string().required() })

      const emailExiste = await knex.count("iduserSenai as existe").from("userSenai").where("email", email)
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
        isActive: true
      })

      return response.json(user)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },


  //Alteração de Usuários com validação --OK
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
          .json({ error: 'Senha atual e nova iguais!' })
      }
      if (!result) {
        return response
          .status(400)
          .json({ error: 'Senha atual incorreta!' })
      }
      if (novaSenha !== confirmaSenha) {
        return response
          .status(400)
          .json({ error: 'Senhas não conferem!' })
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

  //Listagem de Usuários --OK
  async consultaAlunos(request, response){
    try{
      const { page =1 } = request.query
      const { name } = request.body
      const [count] = await knex("user").count("*")
      const alunos = await knex("user")
      .limit(5)
      .offset((page -1)*5)      
      .select("iduser","name","email","phone","celular","cpf","isActive")
      .whereRaw('name like \'%??%\'', [name]);
      console.log(alunos)
      response.header("X-Total-Count", count['count(*)'])      

      return response.json(alunos);

    }catch(erros){

      return response.json({ error: erros.message })
    }
  },

  async consultaColaborador(request, response) {
    try {
      const results = await knex.select("*").from("userSenai").orderBy("iduserSenai");
      return response.json(results);

    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },
}
