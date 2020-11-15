const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

module.exports = {
  
  //Criação de Usuários com validação --OK
  async createAluno(request, response, next) {
    try {
      const { name, email, phone, celular, isActive } = request.body
      const validator = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        celular: yup.string().required(),
      })

      const emailExiste = await knex.select("*").from("user").where("email", email).count()
      console.log(emailExiste)
      if(emailExiste > 0){
        return response.status(400).json({ error: 'Email já cadastrado' })
      }

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

  async resetSenhaAluno(request, response){

    try{

       

    }catch(erros){

    }
  },


  //Listagem de Usuários --OK
  async indexAluno(request, response) {
    try{
      const results = await knex.select("*").from("user").orderBy("iduser");
      return response.json(results);

    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async indexColaborador(request, response) {
    try{
      const results = await knex.select("*").from("userSenai").orderBy("iduserSenai");
      return response.json(results);

    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  //Listagem de usuário específico --OK
  async uniqueAluno(request, response, next) {
    try {
      const { id } = request.query;
      const pesquisaUserUnico = await knex("user").where("iduser", id).first();

      if (!pesquisaUserUnico) {
        return response.json({ msg: "Usuário não encontrado" }); 
      } else {
        return response.json(pesquisaUserUnico);
      }
    } catch (error) {
      return response.json({ error: erros.message })
    }
  },

  async uniqueColaborador(request, response, next) {
    try {
      const { id } = request.query;
      const pesquisaUserUnico = await knex("userSenai").where("iduserSenai", id).first();

      if (!pesquisaUserUnico) {
        return response.json({ msg: "Usuário não encontrado" }); 
      } else {
        return response.json(pesquisaUserUnico);
      }
    } catch (error) {
      return response.json({ error: erros.message })
    }
  },
}
