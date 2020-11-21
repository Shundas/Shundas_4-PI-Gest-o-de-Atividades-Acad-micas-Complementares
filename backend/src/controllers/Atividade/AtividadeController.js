const knex = require('../../database/connection')
const yup = require('yup')
const crypto = require('crypto')


module.exports = {

    async createAtividade(request, response) {
        try {
    
            const { path } = request.file
    
            const { iduser } = request.query
    
            const { iduserSenai, idactivity, idcategory, institutionName, date_end, workload, attachment, activityName, status } = request.body
            
            const validatorInstitution = yup.object().shape({ institutionName: yup.string().required() })
            const validatorDate = yup.object().shape({ date_end: yup.date().required() })
            const validatorWork = yup.object().shape({ workload: yup.string().required() })
            const validatorActivity = yup.object().shape({ activityName: yup.string().required() })
                
        
            if (!(await validatorInstitution.isValid(request.body))) {
                return response.status(400).json({ error: 'Nome da Instituição é campo obrigatório.' })
            }

            if (!(await validatorDate.isValid(request.body))) {
                return response.status(400).json({ error: 'Data é campo obrigatório.' })
            }

            if (!(await validatorWork.isValid(request.body))) {
                return response.status(400).json({ error: 'Horas validadas é campo obrigatório.' })
            }

            if (!(await validatorActivity.isValid(request.body))) {
                return response.status(400).json({ error: 'Nome da Atividade é campo obrigatório.' })
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
            status: "Registrado",
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

            const validator = yup.object().shape({ activityName: yup.string().required() })
            const validatorDate = yup.object().shape({ date_end: yup.date().required() })

            if (!(await validator.isValid(request.body))) {
                return response.status(400).json({ error: 'Nome da Atividade é campo obrigatório.' })
            }

            if (!(await validatorDate.isValid(request.body))) {
                return response.status(400).json({ error: 'Data é campo obrigatório.' })
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
           
            const atividades = await knex('form')
            .select('form.idform', 'category.name_cat', 'activity.description', 'form.status', 'userSenai.name')
            .join('category', 'form.idcategory', '=', 'category.idcategory')
            .join('activity', 'form.idactivity', '=', 'activity.idactivity')
            .join('userSenai', 'form.iduserSenai', '=', 'userSenai.iduserSenai')          

            return response.json(atividades)        

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async visualizarAtividade(request, response) {
        try{
            const { idform } = request.query

            const atividades = await knex('form')
                .select('form.institutionName', 'form.activityName', 'category.name_cat', 'activity.description', 'form.workload', 'form.date_end', 'form.attachment','form.status','userSenai.name')
                .join('category', 'form.idcategory', '=', 'category.idcategory')
                .join('activity', 'form.idactivity', '=', 'activity.idactivity')
                .join('userSenai', 'form.iduserSenai', '=', 'userSenai.iduserSenai')
                .where('idform', idform)          

                return response.json(atividades)

        } catch (erros) {
            return response.json({ error: erros.message })
        }

    },

    async updateAtividade(request, response) {
        
        try {
            const { idform } = request.query

            const { iduserSenai, idactivity, idcategory, institutionName, date_end, workload, activityName, status } = request.body
            const validatorInstitution = yup.object().shape({ institutionName: yup.string().required() })
            const validatorDate = yup.object().shape({ date_end: yup.date().required() })
            const validatorWork = yup.object().shape({ workload: yup.string().required() })
            const validatorActivity = yup.object().shape({ activityName: yup.string().required() })
                
        
            if (!(await validatorInstitution.isValid(request.body))) {
                return response.status(400).json({ error: 'Nome da Instituição é campo obrigatório.' })
            }

            if (!(await validatorDate.isValid(request.body))) {
                return response.status(400).json({ error: 'Data é campo obrigatório.' })
            }

            if (!(await validatorWork.isValid(request.body))) {
                return response.status(400).json({ error: 'Horas validadas é campo obrigatório.' })
            }

            if (!(await validatorActivity.isValid(request.body))) {
                return response.status(400).json({ error: 'Nome da Atividade é campo obrigatório.' })
            }

            const updateAtividade = await knex('form')
            .update({ iduserSenai, idactivity, idcategory, institutionName, date_end, workload, activityName, status })
            .where('idform', idform)
    
            return response.json(updateAtividade)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    
    }
}