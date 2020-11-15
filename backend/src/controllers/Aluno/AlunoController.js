const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

module.exports = {

    async createAtividade(request, response) {
        try {
            const { iduser, iduserSenai, idactivity, idcategory, institutionName, date_end, workload, attachment, activityName, status } = request.body
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
            attachment,
            activityName,
            status,
        })

        return response.json(formAtividade)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    }
}