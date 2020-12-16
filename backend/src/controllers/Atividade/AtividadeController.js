const knex = require('../../database/connection');
const yup = require('yup');
const crypto = require('crypto');
const { info } = require('console');
const nodemailer = require('nodemailer')



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

            if (iduser == 0) {
                return response.json({ msg: "", erro: 'Aluno Senai é campo obrigatório.' })
            }

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
                    return response.json({ msg: "", erro: `Você já validou todas as horas possíveis para este tipo de atividade: ${totalHour}h.` })
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
                iduserSenai: "63e02be21c18344d",
                idactivity,
                idcategory,
                institutionName,
                date_end,
                informedWorkload,
                attachment: filename,
                activityName,
                idstatus: 1,
                senaiEvent: false
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
                senaiEvent: true
            })

            return response.json(formAtividadeSenai)

        } catch (erros) {
            return response.json({ error: erros.message })
        }
    },

    async indexAtividade(request, response) {
        try {

            const atividades = await knex('form')
                .select('form.idform', 'form.activityName', 'category.name_cat', 'activity.description', 'status.status', 'user.name as userName', 'userSenai.name')
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

            const download = {
                image_url: `http://localhost:3333/uploads/${attachment}`
            }

            console.log(download)

            const atividades = await knex('form')
                .select('form.institutionName', 'form.activityName', 'form.informedWorkload', 'form.attachment', 'category.name_cat', 'activity.description', 'category.idcategory', 'activity.idactivity', 'form.workload', 'form.date_end', 'status.status', 'user.name as userName', 'userSenai.name', 'form.iduserSenai', 'form.idcategory', 'form.idactivity', 'form.idstatus', 'form.iduser')
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
            const { id } = request.params;
            console.log(id)

            const idform = id

            console.log(idform)

            var erro
            let mensagem = ""

            console.log(request.body)

            const { idactivity, idcategory, institutionName, date_end, informedWorkloadT, activityName, idstatus, iduser } = request.body

            const validatorInstitution = yup.object().shape({ institutionName: yup.string().required() })
            const validatorDate = yup.object().shape({ date_end: yup.date().required() })
            const validatorWork = yup.object().shape({ informedWorkloadT: yup.string().required() })
            const validatorActivity = yup.object().shape({ activityName: yup.string().required() })


            if (!(await validatorInstitution.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Nome da Instituição é campo obrigatório.' })
            }

            if (!(await validatorActivity.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Atividade Complementar é campo obrigatório.' })
            }

            if (!(await validatorDate.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Data de Conclusão é campo obrigatório.' })
            }

            if (!(await validatorWork.isValid(request.body))) {
                return response.status(200).json({ msg: "", erro: 'Quantidade de horas é campo obrigatório.' })
            }


            //Validação de Carga Horaria

            //Buscando o Workload registrado nas outras atividades
            const buscaWorkload = await knex('form').sum('workload as workload').where('iduser', iduser).where('idactivity', idactivity).where("idstatus", 3)

            console.log(buscaWorkload)

            // Buscando o InformedWorkload na ativade que será realizado o Update
            const buscaInformedWorkload = await knex('form').sum('informedWorkload as informedWorkload').where('idform', idform)

            console.log(buscaInformedWorkload)

            //Buscando as regras de carga horaria, por atividade e categoria
            const selectAtividade = await knex('activity')
                .select('hoursPerActivity', 'totalHour')
                .where('idactivity', idactivity)
                .where('idcategory', idcategory)


            //Desestrurando os select
            let [{ hoursPerActivity, totalHour }] = selectAtividade
            let [{ workload }] = buscaWorkload
            // let [{ informedWorkload }] = buscaInformedWorkload
            let restante

            console.log("Horas por atividade: " + hoursPerActivity)
            console.log("Hora total: " + totalHour)
            console.log("Workload: " + workload)

            if (workload === null) {
                const updateAtividade = await knex('form')
                    .update({
                        idactivity: idactivity,
                        idcategory: idcategory,
                        institutionName: institutionName,
                        date_end: date_end,
                        activityName: activityName,
                        idstatus: idstatus
                    })
                    .where('idform', idform)

                return response.json({
                    msg: mensagem,
                    erro,
                })
            }

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

            const updateAtividade = await knex('form')
                .update({ idactivity, idcategory, institutionName, date_end, activityName, idstatus })
                .where('idform', idform)

            return response.json({
                msg: mensagem,
                erro,
            })

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
            console.log('chegou na rota de Download')

            return response.download(directory, attachment)

        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async aprovaAtividade(request, response) {

        try {
            const { idSec, idform, iduser } = request.body
            const result = await knex('form').select('idactivity', 'idcategory', 'senaiEvent', 'informedWorkload', 'idstatus', 'activityName').where('idform', idform)
            const user = await knex('user').select('email').where('iduser',iduser)
            const userSenai = await knex('userSenai').select('email').where('iduserSenai',idSec)
            const [{ emailSenai }] = userSenai
            const [{ email }] = user
            const [{ idactivity, idcategory, senaiEvent, informedWorkload, idstatus, activityName }] = result
            var msg = ""

            if (idstatus === 3) {
                return response.status(400).json({ error: 'Esta atividade já está aguardando retorno da secretaria.' })
            } else {

                if (senaiEvent === 1) {
                    if (idactivity === null || idcategory === null) {
                        msg += "Você precisa preencher a categoria e tipo de atividade. "
                    }
                    if (informedWorkload === null) {
                        msg += "Você precisa preencher a quantidade de horas a serem validadas. "
                    }
                }
                if (msg !== "") {
                    return response.status(400).json({ error: msg })
                } else {

                    let transport = nodemailer.createTransport({
                        host: process.env.APP_HOST,
                        port: process.env.APP_PORT,
                        secure: false,
                        auth: {
                          user: process.env.APP_USER,
                          pass: process.env.APP_PASS,
                        },
                      })
              
                      await transport.sendMail({
                        from: '<noreplay@senai.com>',
                        to: email,
                        subject: `O status de validação da atividade \"${activityName}\" mudou`,
                        text: `A validação da atividade está aguardando a conclusão por parte da secretaria. \n\n Qualquer novidade, lhe manteremos atualizado!`,
                        html: `A validação da atividade está aguardando a conclusão por parte da secretaria. <br><br> Qualquer novidade, lhe manteremos atualizado!`,
                      })

                      await transport.sendMail({
                        from: '<noreplay@senai.com>',
                        to: emailSenai,
                        subject: `Você recebeu uma nova tarefa de validação de atividade`,
                        text: ``,
                        html: `ID: ${idform}<br> Nome da atividade: ${activityName}<br>`,
                      })

                    await knex('form').update({ iduserSenai: idSec, idstatus: 3 }).where('idform', idform)
                    return response.status(200).json({ msg: 'Atividade encaminhada para aprovação da secretaria acadêmica.' })
                }
            }
        } catch (error) {
            return response.json({ error: error.message })
        }

    },

    async encaminhaCoordenador(request, response) {

        try {
            const { idCoord, idform, iduser  } = request.body

            const result = await knex('form').select('idactivity', 'idcategory', 'senaiEvent', 'informedWorkload', 'idstatus', 'activityName').where('idform', idform)
            const user = await knex('user').select('email').where('iduser',iduser)
            const [{ email }] = user
            const [{ idactivity, idcategory, senaiEvent, informedWorkload, idstatus, activityName }] = result
            var msg = ""

            if (idstatus === 2) {
                return response.status(400).json({ error: 'Esta atividade já está aguardando aprovação do coordenador.' })
            } else {

                if (senaiEvent === 1) {
                    if (idactivity === null || idcategory === null) {
                        msg += "Você precisa preencher a categoria e tipo de atividade. "
                    }
                    if (informedWorkload === null) {
                        msg += "Você precisa preencher a quantidade de horas a serem validadas. "
                    }
                }
                if (msg !== "") {
                    return response.status(400).json({ error: msg })
                } else {

                    let transport = nodemailer.createTransport({
                        host: process.env.APP_HOST,
                        port: process.env.APP_PORT,
                        secure: false,
                        auth: {
                          user: process.env.APP_USER,
                          pass: process.env.APP_PASS,
                        },
                      })
              
                      let info = await transport.sendMail({
                        from: '<noreplay@senai.com>',
                        to: email,
                        subject: `O status de validação da atividade \"${activityName}\" mudou.`,
                        text: `A validação da atividade está aguardando a aprovação da coordenação. \n Qualquer novidade, lhe manteremos informado(a).`,
                        html: `A validação da atividade está aguardando a aprovação da coordenação. <br><br> Qualquer novidade, lhe manteremos informado(a).`,
                      })

                    await knex('form').update({ iduserSenai: idCoord, idstatus: 2 }).where('idform', idform)
                    return response.status(200).json({ msg: 'Atividade encaminhada para aprovação do coordenador' })
                }
            }


        } catch (error) {
            return response.json({ error: error.message })
        }

    },

    async rejeitaAtividade(request, response) {
        try {

            const { idusersenai, idform } = request.headers
            const { comment } = request.body
            const check = yup.object().shape({ comment: yup.string().required() })

            const result = await knex('form').select('idactivity', 'idcategory', 'senaiEvent', 'informedWorkload', 'idstatus').where('idform', idform)
            const [{ idactivity, idcategory, senaiEvent, informedWorkload, idstatus }] = result

            if (idstatus === 4 || idstatus === 5) {
                return response.status(400).json({ error: 'A validação desta atividade já está finalizada.' })
            } else {

                if (!(await check.isValid(request.body))) {
                    return response.status(400).json({ error: 'Você deve enviar um comentário com o motivo da rejeição.' })
                } else {
                    const idcomment = crypto.randomBytes(8).toString('hex')
                    await knex('form').update({ iduserSenai: idusersenai, idstatus: 5 }).where('idform', idform)
                    await knex('comments').insert({ idcomments: idcomment, idform: idform, public: true, comment: comment, iduserSenai: idusersenai })

                    return response.status(200).json({ msg: 'Atividade rejeitada.' })
                }
            }

        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async concluiAtividade(request, response) {
        try {
            const { iduserSenai, idform } = request.headers

            const result = await knex('form').select('idactivity', 'idcategory', 'senaiEvent', 'informedWorkload', 'idstatus').where('idform', idform)
            const [{ idactivity, idcategory, senaiEvent, informedWorkload, idstatus }] = result

            if (idstatus === 4 || idstatus === 5) {
                return response.status(400).json({ error: 'A validação desta atividade já está finalizada.' })
            } else {

                const idcomment = crypto.randomBytes(8).toString('hex')
                await knex('form').update({ iduserSenai: iduserSenai, idstatus: 4 }).where('idform', idform)

                return response.status(200).json({ msg: 'Validação concluída.' })
            }


        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async calculaHoras(request, response) {
        try {

            const { id } = request.headers

            const ensino = await knex('form').sum('workload as somaEnsino').where('idcategory', 1).where({ iduser: id })
            const pesquisa = await knex('form').sum('workload as somaPesquisa').where('idcategory', 2).where({ iduser: id })
            const extensao = await knex('form').sum('workload as somaExtensao').where('idcategory', 3).where({ iduser: id })

            var [{ somaEnsino }] = ensino
            var [{ somaPesquisa }] = pesquisa
            var [{ somaExtensao }] = extensao

            var total = somaEnsino + somaExtensao + somaPesquisa

            return response.json({ ensino: ensino, pesquisa: pesquisa, extensao: extensao, total: total })

        } catch (error) {

            return response.json({ error: error.message })

        }
    },

    async listaCoordenadores(request, response) {
        try {

            const result = await knex('userSenai').select('idusersenai', 'name').where('idrole', 1111)
            console.log(result)

            return response.json(result)

        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async listaAssistentes(request, response) {
        try {

            const result = await knex('userSenai').select('idusersenai', 'name').where('idrole', 4444)

            return response.json(result)

        } catch (error) {
            return response.json({ error: error.message })
        }
    },

    async listaSecretaria(request, response) {
        try {

            const result = await knex('userSenai').select('idusersenai', 'name').where('idrole', 2222)

            return response.json(result)

        } catch (error) {
            return response.json({ error: error.message })
        }
    }

}