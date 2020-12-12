const knex = require('../../database/connection');
const yup = require('yup');
const crypto = require('crypto');



module.exports = {

    async createAtividade(request, response) {
        try {

            const filters = request.query
            var erro

            //Verificar
            const { iduser, iduserSenai } = filters

            console.log(request.body)

            const { idactivity, idcategory, institutionName, date_end, informedWorkload, activityName } = request.body

            const validatorInstitution = yup.object().shape({ institutionName: yup.string().required() })
            const validatorDate = yup.object().shape({ date_end: yup.date().required() })
            const validatorWork = yup.object().shape({ informedWorkload: yup.string().required() })
            const validatorActivity = yup.object().shape({ activityName: yup.string().required() })


            if (!(await validatorInstitution.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Nome da Instituição é campo obrigatório.' })
            }

            if (!(await validatorActivity.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Atividade Complementar é campo obrigatório.' })
            }

            if (idcategory == 0) {
                return response.json({ msg: "", erro: 'Modalidade é campo obrigatório.' })
            }

            if (idactivity == 0) {
                return response.json({ msg: "", erro: 'Atividade é campo obrigatório.' })
            }

            if (!(await validatorWork.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Horas validadas é campo obrigatório.' })
            }

            if (!(await validatorDate.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Data é campo obrigatório.' })
            }

            if (request.file === undefined) {
                return response.json({ msg: "", erro: "O envio de arquivo é obrigatório." })
            }

            console.log(request.file)

            const { filename } = request.file
            const { path } = request.file



            // return response.download(path, originalname);

            const id = crypto.randomBytes(8).toString('hex')

            //Validar Horas
            const selectAtividade = await knex('activity')
                .select('hoursPerActivity', 'totalHour')
                .where('idactivity', idactivity)
                .where('idcategory', idcategory)

            var [{ hoursPerActivity, totalHour }] = selectAtividade
            let mensagem = ""

            //Testado -- OK
            if (informedWorkload <= 0) {
                return response.json({ msg: "", erro: `Carga horária deve ser maior que 0h.` })
            } else {
                //Testado -- OK
                const verificaTotal = await knex.sum("workload as workloadTotal").from("form").where("iduser", iduser).where("idactivity", idactivity).where("idstatus", 3)
                const [{ workloadTotal }] = verificaTotal
                if (workloadTotal === totalHour) {
                    return response.json({ msg: "", erro: `Vocẽ já validou todas as horas possíveis para este tipo de atividade: ${totalHour}h.` })
                }
            }
            console.log(hoursPerActivity)
            //Testado -- OK
            if (hoursPerActivity === null) {
                if (informedWorkload > totalHour) {
                    mensagem = ` Sua atividade foi registrada, porém você informou ${informedWorkload}h e neste tipo de atividade serão validadas no máximo ${totalHour}h.`
                }
                //Testado -- OK    
            } else if (hoursPerActivity !== null) {
                if (informedWorkload > hoursPerActivity) {
                    mensagem = ` Sua atividade foi registrada, porém você informou ${informedWorkload}h e neste tipo de atividade serão validadas no máximo ${hoursPerActivity}h por envio.`
                }
            }

            //Insert na tabela -- OK
            const formAtividade = await knex('form').insert({
                idform: id,
                iduser,
                iduserSenai,
                idactivity,
                idcategory,
                institutionName,
                date_end,
                informedWorkload,
                attachment: filename,
                activityName,
                idstatus: 1,
            })

            return response.json({
                msg: mensagem,
                erro,
            })

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async createAtividadeSenai(request, response) {
        try {

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
        try {

            const atividades = await knex('form')
                .select('form.idform', 'form.activityName', 'category.name_cat', 'activity.description', 'status.status', 'user.userName', 'userSenai.name')
                .join('category', 'form.idcategory', '=', 'category.idcategory')
                .join('activity', 'form.idactivity', '=', 'activity.idactivity')
                .join('userSenai', 'form.iduserSenai', '=', 'userSenai.iduserSenai')
                .join('user', 'form.iduser', '=', 'user.iduser')
                .join('status', 'form.idstatus', '=', 'status.idstatus')

            return response.json(atividades)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async visualizarAtividade(request, response) {
        try {
            const { id } = request.params;
            
            const file = await knex('form').select('attachment').where('idform', id).first();

            const { attachment } = file

            console.log(attachment)

            const download = {
                image_url: `http://localhost:3333/uploads/${attachment}`
            }
            
            console.log(download)

            const atividades = await knex('form')
                .select('form.institutionName', 'form.activityName', 'form.informedWorkload', 'form.attachment', 'category.name_cat', 'activity.description', 'category.idcategory', 'activity.idactivity', 'form.workload', 'form.date_end', 'status.status', 'user.userName', 'userSenai.name')
                .join('category', 'form.idcategory', '=', 'category.idcategory')
                .join('activity', 'form.idactivity', '=', 'activity.idactivity')
                .join('userSenai', 'form.iduserSenai', '=', 'userSenai.iduserSenai')
                .join('user', 'form.iduser', '=', 'user.iduser')
                .join('status', 'form.idstatus', '=', 'status.idstatus')
                .where('idform', id).first()

            console.log(atividades)
            return response.json({
                atividades, 
                download
            })

        } catch (erros) {
            return response.json({ error: erros.message })
        }

    },

    async updateAtividade(request, response) {

        try {
            const { idform } = request.query

            const { iduser, iduserSenai, idactivity, idcategory, institutionName, date_end, workloadT, activityName, idstatus } = request.body
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


            //Validação de Carga Horaria

            //Buscando o Workload registrado nas outras atividades
            const buscaWorkload = await knex('form').sum('workload as workload').where('iduser', iduser).where('idactivity', idactivity).where("idstatus", 3)

            //Buscando o InformedWorkload na ativade que será realizado o Update
            const buscaInformedWorkload = await knex('form').sum('informedWorkload as informedWorkload').where('idform', idform)


            //Buscando as regras de carga horaria, por atividade e categoria
            const selectAtividade = await knex('activity')
                .select('hoursPerActivity', 'totalHour')
                .where('idactivity', idactivity)
                .where('idcategory', idcategory)


            //Desestrurando os select
            let [{ hoursPerActivity, totalHour }] = selectAtividade
            let [{ workload }] = buscaWorkload
            let [{ informedWorkload }] = buscaInformedWorkload
            let restante

            console.log("Horas por atividade: " + hoursPerActivity)
            console.log("Hora total: " + totalHour)
            console.log("Workload: " + workload)

            if (idstatus === 3) {
                if (hoursPerActivity === null) {
                    if (workload < totalHour) {
                        restante = totalHour - workload
                        if (informedWorkload <= restante) {
                            const updateAtividade = await knex('form').update({ workload: informedWorkload }).where('idform', idform)
                            response.json({ msg: `Workload atualizado para ${informedWorkload}` })
                        } else {
                            const updateAtividade = await knex('form').update({ workload: restante }).where('idform', idform)
                            response.json({ msg: `Workload atualizado para ${restante}` })
                        }
                    }
                } else {
                    if (workload < totalHour) {
                        restante = totalHour - workload
                        if (restante > hoursPerActivity) {
                            const updateAtividade = await knex('form').update({ workloadT: hoursPerActivity }).where('idform', idform)
                            response.json({ msg: `Workload atualizado para ${hoursPerActivity}` })
                        } else if (restante < hoursPerActivity) {
                            const updateAtividade = await knex('form').update({ workloadT: restante }).where('idform', idform)
                            response.json({ msg: `Workload atualizado para ${restante}` })
                        }
                    }
                }
            }

            // const updateAtividade = await knex('form')
            // .update({ iduserSenai, idactivity, idcategory, institutionName, date_end, workload, activityName, idstatus })
            // .where('idform', idform)

            // return response.json({ msg: "kasinoo" })

        } catch (erros) {
            return response.json({ error: erros.message })
        }

    },

    async category(request, response) {
        try {
            const result = await knex("category").select("idcategory", "name_cat")
            console.log(result)
            return response.json(result)
        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async activity(request, response) {
        try {
            const filters = request.query
            console.log(filters)

            const result = await knex("activity").select("idactivity", "description").where("idcategory", filters.idcategory)
            return response.json(result)
        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async indexStatus(request, response) {
        try {            
            const status = await knex('status').select('idstatus', 'status')
            console.log(status)
            return response.json(status)
        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async showFile(request, response) {
        try {            
            const { id } = request.params;       
            const file = await knex('form').select('attachment').where('idform', id).first();
            const { attachment } = file
            const directory = `tmp/uploads/${attachment}`;

            return response.download(directory, attachment)
            
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}