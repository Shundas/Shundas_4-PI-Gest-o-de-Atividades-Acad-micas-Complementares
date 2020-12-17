import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import FileDown from 'js-file-download';

import Header from '../../components/HeaderAdmin';

const ContainerApp = styled.div`
  margin-top: 2em;
  margin-bottom: 3em;

  .divider {
    width: 100%;
    display: flex;
  }

  .container-divider {
    width: 100%;
    display: flex;
  }

  .btn-salve {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      width: 500px;
      border-radius: 6px;
      margin-top: 9px;
    }
  }
`;
const TitleH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

const SubTitle = styled.h4``;


export default function CoordenadorVisualizaAtividades() {
  const { id } = useParams();

  const [category, setCategory] = useState([]);
  const [activity, setActivity] = useState([]);
  const [status, setStatus] = useState([]);
  const [user, setUser] = useState([]);
  const [cargo, setCargo] = useState([]);


  const [erros, setErros] = useState({
    msg: '',
    erro: '',
  });

  const validacao = Object.entries(erros).length;

  const [download, setDownload] = useState({
    image_url: ""
  });

  const [atividade, setAtividade] = useState({
    institutionName: '',
    activityName: '',
    name_cat: '',
    name: '',
    userName: '',
    institutionName: '',
    description: '',
    status: '',
    attachment: '',
    workload: '',
    informedWorkload: '',
    date_end: '',
    idcategory: '',
    idactivity: '',
    iduserSenai: '',
    iduser: '',
    idstatus: ''
  });

  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedUser, setSelectedUser] = useState('0');
  const [selectedCargo, setSelectedCargo] = useState('0');
  const [selectedStatus, setSelectedStatus] = useState('0');
  const [selectedActivity, setSelectedActivity] = useState('0');

  useEffect(() => {
    axios.get('/listaCargos').then(response => {
      console.log(response.data)
      setCargo(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCargo === '0') {
      return;
    }

    axios
      .get('/listaGalera', {
        params: {
          idrole: selectedCargo,
        },
      })
      .then(response => {
        console.log(response.data)
        setUser(response.data);
      });
  }, [selectedCargo]);

  useEffect(() => {
    axios.get('/category').then(response => {
      setCategory(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('/status').then(response => {
      setStatus(response.data);
    });
  }, []);
 

  useEffect(() => {
    if (selectedCategory === '0') {
      return;
    }

    axios
      .get('/activity', {
        params: {
          idcategory: selectedCategory,
        },
      })
      .then(response => {
        setActivity(response.data);
      });
  }, [selectedCategory]); //quando q essa função deve executar

  useEffect(() => {
    axios.get(`/visualizarAtividade/${id}`).then(response => {
      console.log(response.data);
      setAtividade(response.data.atividades)
      setDownload(response.data.download)
    });
  }, []);

  //Formatação da Data
  function adicionaZero(numero) {
    if (numero <= 9) return '0' + numero;
    else return numero;
  }
  atividade.date_end = new Date(atividade.date_end);
  let dataFormatada =
    atividade.date_end.getFullYear() +
    '-' +
    adicionaZero(atividade.date_end.getMonth()) +
    '-' +
    adicionaZero(atividade.date_end.getDate());


  //Download Arquivo  
  function handleDownload(event) {
    event.preventDefault();
    axios.get(`/download/${id}`, {
      responseType: 'blob',
    }).then((response) => {
      FileDown(response.data, atividade.attachment);
    })
  }

  //Função para Receber os valores alterados do front
  function handleInputChange(event) {
    const { name, value } = event.target;

    setAtividade({ ...atividade, [name]: value });
  }


  //Função para fazer a requisição de update no backend
  async function handleSubmmit(event) {
    event.preventDefault();
    const {
      institutionName,
      informedWorkload,
      activityName,
      date_end,
      iduser
    } = atividade;

    var category = selectedCategory;
    var activity = selectedActivity;
    var status = selectedStatus;

    if( category == 0) {
      category = atividade.idcategory
      console.log(category)
    }

    if( activity == 0) {
      activity = atividade.idactivity
      console.log(activity)
    }

    if( status == 0) {
      status = atividade.idstatus
      console.log(status)
    }

    const data = {
      institutionName: institutionName,
      informedWorkloadT: informedWorkload,
      activityName: activityName,
      date_end: dataFormatada,
      iduser: iduser,
      idcategory: category,
      idactivity: activity,
      idstatus: status
    }

    await axios.put(`/updateAtividade/${id}`, data)
      .then(response => {
        setErros(response.data);
    });
  }

  return (
    <>
      <Header />
      <TitleH2>Vizualizar Atividade</TitleH2>
      <ContainerApp className="container">
      {
          erros.msg === "" && erros.erro === "" ? (
            ""
          ) : (
              ""
            )
        }
        {erros.msg === "" && validacao === 2 ? (
          ""
        ) : (
              <div className="alert alert-success">Alteração Registrada com Sucesso! {erros.msg}</div>          
          )}
        {erros.erro === "" || validacao == 1 ? (
          ''
        ) : (
            <div className="alert alert-danger">{erros.erro}</div>
          )}
        <form className="form" onSubmit={handleSubmmit}>
          <SubTitle>Detalhes</SubTitle>
          <div className="form-column">
            <div>
              <div className="form-group col-md-6">
                <label htmlFor="inst">Nome da Instituição</label>
                <input
                  className="form-control"
                  type="text"
                  name="institutionName"
                  id="institutionName"
                  onChange={handleInputChange}
                  value={atividade.institutionName}
                />
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="aluno">Nome do Aluno</label>
                  <input
                    className="form-control"
                    type="text"
                    name="userName"
                    id="userName"
                    value={atividade.userName}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="atividade">Atividade Complementar</label>
                  <input
                    className="form-control"
                    type="text"
                    name="activityName"
                    id="activityName"
                    onChange={handleInputChange}
                    value={atividade.activityName}
                  />
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="mod">Modalidade</label>
                  <select
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="form-control"
                    id="profile"
                  >
                    <option value={atividade.idcategory} selected disabled>{atividade.name_cat}</option>
                    {
                      category.map(cat => (
                        <option key={cat.idcategory} value={cat.idcategory}>
                          {cat.name_cat}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="ativ">Atividade</label>
                  <select
                    onChange={e => setSelectedActivity(e.target.value)}
                    className="form-control"
                    id="activity"
                  >
                    <option value={atividade.idactivity} selected disabled >{atividade.description}</option>
                    {activity.map(act => (
                      <option key={act.idactivity} value={act.idactivity}>
                        {act.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="qtd">Quantidades de Horas</label>
                  <input
                    className="form-control"
                    type="number"
                    min="1"
                    max="60"
                    name="informedWorkload"
                    id="informedWorkload"
                    onChange={handleInputChange}
                    value={atividade.informedWorkload}

                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="qtd">Horas Validadas</label>
                  <input
                    className="form-control"
                    type="number"
                    min="1"
                    max="60"
                    name="workload"
                    id="workload"
                    value={atividade.workload}
                    disabled
                  />
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="date">Data de Conclusão</label>
                  <input
                    className="form-control"
                    type="date"
                    name="date_end"
                    id="date_end"
                    onChange={handleInputChange}
                    value={dataFormatada}

                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Anexo</label>
                  <button onClick={handleDownload}>Download File</button>
                </div>
              </div>
              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="date">Status</label>
                  <select
                    onChange={e => setSelectedStatus(e.target.value)}
                    className="form-control"
                    id="profile"
                  >
                    <option value={atividade.idstatus} selected disabled>{atividade.status}</option>
                    {
                      status.map(st => (
                        <option key={st.idstatus} value={st.idstatus}>
                          {st.status}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Responsável Atual</label>
                  <input
                    className="form-control"
                    type="text"
                    name="userSenai"
                    id="userSenai"
                    value={atividade.name}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="btn-salve">
              <button className="btn btn-primary">Salvar</button>
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Enviar Para
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target="#exampleModalReject"
              >
                Rejeitar
              </button>
            </div>
          </div>
        </form>
      </ContainerApp>


      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Enviar Atividade Para
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>Selecione o Colaborador</h5>

              <form>
              <div className="form-group">
                  <label htmlFor="assunto">Cargo</label>
                  <select
                    onChange={e => setSelectedCargo(e.target.value)}
                    className="form-control"
                    id="profile"
                  >
                    <option disabled selected>Selecione</option>
                    {
                      cargo.map(car => (
                        <option key={car.idrole} value={car.idrole}>
                          {car.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="assunto">Responsável</label>
                  <select
                    onChange={e => setSelectedUser(e.target.value)}
                    className="form-control"
                    id="profile"
                  >
                    <option disabled selected>Selecione</option>
                    {
                      user.map(us => (
                        <option key={us.iduserSenai} value={us.iduserSenai}>
                          {us.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="assunto">Comentario</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalReject"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalRejectTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Enviar Atividade Para
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>Rejeitar a Atividade</h5>

              <form>
                <div className="form-group">
                  <label htmlFor="assunto">Comentario</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button className="btn btn-primary">Rejeitar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
