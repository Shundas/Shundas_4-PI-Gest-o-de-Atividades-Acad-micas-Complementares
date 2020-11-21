const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer');
const { orWhereRaw, orWhere } = require('../../database/connection');


module.exports = {

  //Criação de Usuários com validação --OK
  async createAluno(request, response, next) {
    try {
      const { name, email, phone, celular, cpf } = request.body
      const validatorName = yup.object().shape({ name: yup.string().required() })
      const validatorEmail = yup.object().shape({ email: yup.string().email().required() })
      const validatorCelular = yup.object().shape({ celular: yup.string().required() })
      const validatorCpf = yup.object().shape({ cpf: yup.string().required() })

      const emailExiste = await knex.count("iduser as existeEmail").from("user").where("email", email)
      var [{ existeEmail }] = emailExiste

      const emailcpf = await knex.count("iduser as existeCpf").from("user").where("cpf", cpf)
      const [{ existeCpf }] = emailcpf

      if (existeCpf > 0) {
        return response.status(400).json({ error: 'CPF já cadastrado.' })
      }
      if (!(await validatorName.isValid(request.body))) {
        return response.status(400).json({ error: 'Nome é campo obrigatório.' })
      }
      if (existeEmail > 0) {
        return response.status(400).json({ error: 'Email já cadastrado.' })
      }

      if (!(await validatorEmail.isValid(request.body))) {
        return response.status(400).json({ error: 'Email inválido.' })
      }
      if (!(await validatorCelular.isValid(request.body))) {
        return response.status(400).json({ error: 'Celular obrigatório.' })
      }

      if (!(await validatorCpf.isValid(request.body))) {
        return response.status(400).json({ error: 'CPF obrigatório.' })
      }


      const id = crypto.randomBytes(8).toString('hex')
      const senha = crypto.randomBytes(4).toString('hex')
      const hash = await bcrypt.hash(senha, 10)

      const user = await knex('user').insert({
        iduser: id,
        name,
        email,
        phone,
        cpf,
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
      const { name, email, phone, celular, idrole, cpf } = request.body
      const validatorName = yup.object().shape({ name: yup.string().required() })
      const validatorEmail = yup.object().shape({ email: yup.string().email().required() })
      const validatorCelular = yup.object().shape({ celular: yup.string().required() })
      const validatorCpf = yup.object().shape({ cpf: yup.string().required() })

      const emailExiste = await knex.count("iduserSenai as existe").from("userSenai").where("email", email)
      var [{ existe }] = emailExiste

      const emailcpf = await knex.count("iduserSenai as existeCpf").from("userSenai").where("cpf", cpf)
      const [{ existeCpf }] = emailcpf

      if (!(await validatorName.isValid(request.body))) {
        return response.status(400).json({ error: 'Nome é campo obrigatório.' })
      }
      if (existeCpf > 0) {
        return response.status(400).json({ error: 'CPF já cadastrado.' })
      }
      if (existe > 0) {
        return response.status(400).json({ error: 'Email já cadastrado.' })
      }
      if (!(await validatorEmail.isValid(request.body))) {
        return response.status(400).json({ error: 'Email inválido.' })
      }
      if (!(await validatorCelular.isValid(request.body))) {
        return response.status(400).json({ error: 'Celular obrigatório.' })
      }
      if (!(await validatorCpf.isValid(request.body))) {
        return response.status(400).json({ error: 'CPF obrigatório.' })
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
        cpf,
        idrole,
        senha: hash,
        isActive: true
      })

      return response.json(user)
    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  //Listagem de Usuários --OK
  async consultaAlunos(request, response){
    try{
      const { page =1 } = request.query
      
      const [count] = await knex("user").count("*")
      const alunos = await knex("user")      
      .limit(5)
      .offset((page -1)*5)      
      .select("iduser","name","email","phone","celular","cpf","isActive")
 
      response.header("X-Total-Count", count['count(*)'])      

      return response.json(alunos);

    }catch(erros){

      return response.json({ error: erros.message })
    }
  },

  async consultaColaborador(request, response) {
    try {
      
      const { page =1 } = request.query
      
      const [count] = await knex("userSenai").count("*")
      const result = await knex("userSenai")      
      .limit(5)
      .offset((page -1)*5)
      .join('role','userSenai.idrole', '=', 'role.idrole')      
      .select("userSenai.iduserSenai","role.name","userSenai.email","userSenai.phone","userSenai.celular","userSenai.cpf","userSenai.isActive")
 
      response.header("X-Total-Count", count['count(*)'])      

      return response.json(result);

    } catch (erros) {
      return response.json({ error: erros.message })
    }
  },

  async updateAluno(request, response) {
    try {
        const { name, email, phone, celular, isActive } = request.body
        const { id } = request.query
        const validatorName = yup.object().shape({ name: yup.string().required() })
        const validatorEmail = yup.object().shape({ email: yup.string().email().required() })
        const validatorCelular = yup.object().shape({ celular: yup.string().required() })



        const emailExiste = await knex.count("iduser as existe").from("user").where("email", email)
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
            .update({ name: name, email: email, celular: celular, phone: phone, isActive: isActive })
            .where('iduser', id)

        return response.json(updateUser)
    } catch (erros) {
        return response.json({ error: erros.message })
    }
}

}
