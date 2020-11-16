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
    },

    async indexAtividade(request, response) {
        try{
            const { idform, idcategory, idactivity, status, iduserSenai } = request.query;

            // && idcategory != null && idactivity != null && status != null && iduserSenai != null 
            
            //Condição para todos os filtros
            if( idform != null ) {
                const atividades = await knex('form')
                .join('category', 'form.idcategory', '=', 'category.idcategory')
                .join('activity', 'form.idactivity', '=', 'activity.idactivity')
                .join('userSenai', 'form.iduserSenai', '=', 'userSenai.iduserSenai')
                .where('idform', idform)
                // .where('idcategory', idcategory)            
                // .where('idactivity', idactivity)
                // .where('status', status)
                // .where('iduserSenai', iduserSenai)            
                .select('form.idform', 'category.name', 'activity.description', 'form.status', 'userSenai.name');

                return response.json({
                    result: atividades
                })
            }

            //Condição para nenhum filtro
            if( idform == null && idcategory == null && idactivity == null && status == null && iduserSenai == null ) {
                const atividades = await knex('form')
                .join('category', 'form.idcategory', '=', 'category.idcategory')
                .join('activity', 'form.idactivity', '=', 'activity.idactivity')
                .join('userSenai', 'form.iduserSenai', '=', 'userSenai.iduserSenai')          
                .select('form.idform', 'category.name', 'activity.description', 'form.status', 'userSenai.name');

                return response.json({
                    result: atividades
                })
            }
          

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    }

    
}