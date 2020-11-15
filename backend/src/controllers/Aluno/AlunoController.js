const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')


module.exports = {

    async createAtividade(request, response) {
        try {

            const { path } = request.file

            const { iduser } = request.query

            const { iduserSenai, idactivity, idcategory, institutionName, date_end, workload, attachment, activityName, status } = request.body
            const validator = yup.object().shape({
            institutionName: yup.string().required(),
        })

        if (!(await validator.isValid(request.body))) {
            return response.status(400).json({ error: 'shunda' })
        }

        const id = crypto.randomBytes(8).toString('hex')

        const formAtividade = await knex('form').insert({
            idform: id,
            iduser,
            iduserSenai,
            idactivity,
            idcategory,
            institutionName,
            date_end,
            workload,
            attachment: path,
            activityName,
            status,
        })

        return response.json(formAtividade)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async createAtividadeSenai(request, response) {
        try{

            const { iduser } = request.query
            const { iduserSenai, idactivity, idcategory, date_end, activityName } = request.body

            const validator = yup.object().shape({
                activityName: yup.string().required(),
            })

            if (!(await validator.isValid(request.body))) {
                return response.status(400).json({ error: 'shunda' })
            }
    
            const id = crypto.randomBytes(8).toString('hex')
    
            const formAtividadeSenai = await knex('form').insert({
                idform: id,
                iduser,
                iduserSenai,
                idactivity,
                idcategory,
                date_end,
                activityName,
            })
    
            return response.json(formAtividadeSenai)    

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    }

    
}