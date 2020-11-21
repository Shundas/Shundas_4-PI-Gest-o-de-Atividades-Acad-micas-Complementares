const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')

module.exports = {

    async createComentarioAluno(request, response) {
        try {
            const { iduser, idform, iduserSenai } = request.query
            const { comment } = request.body

            const validator = yup.object().shape({
                comment: yup.string().required(),
            })

            if (!(await validator.isValid(request.body))) {
                return response.status(400).json({ error: 'O campo comentário é obrigatório.' })
            }
    
            const id = crypto.randomBytes(8).toString('hex')

            const comentario = await knex('comments').insert({
                idcomments: id,
                iduser,
                iduserSenai,
                idform,
                comment,
                public: 1,
            })
    
            return response.json(comentario)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async indexComentario(request, response) {
        try {
            const { idform } =  request.query

            const comentario = await knex('comments')
                select('comments.comment', 'userSenai.name', 'user.name')
                .join('userSenai', 'comments.iduserSenai', '=', 'userSenai.iduserSenai')
                .join('user', 'comments.iduser', '=', 'user.iduser')
                .where('idform', idform)
                

            return response.json(comentario)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    } 
}