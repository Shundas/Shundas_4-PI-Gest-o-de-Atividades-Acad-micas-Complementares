import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../services/api';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

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




export default function ColaboradorVisualizaAtividades() {
  const { id } = useParams();

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
  });

  useEffect(() => {
    axios.get(`/visualizarAtividade/${id}`).then(response => {
      console.log(response.data);
      setAtividade(response.data.atividades)
      setDownload(response.data.download)
    });
  }, []);


  // //Formatação da Data
  // function adicionaZero(numero) {
  //   if (numero <= 9) return '0' + numero;
  //   else return numero;
  // }

  // atividade.date_end = new Date(atividade.date_end);
  // let dataFormatada =
  //   atividade.date_end.getFullYear() +
  //   '-' +
  //   adicionaZero(atividade.date_end.getMonth()) +
  //   '-' +
  //   adicionaZero(atividade.date_end.getDate());

  return (
    <>
    {console.log(atividade)}
      <Header />
      <TitleH2>Vizualizar Atividade</TitleH2>
      <ContainerApp className="container">
        <form className="form">
          <SubTitle>Detalhes</SubTitle>
          <div className="form-column">
            <div>
              <div className="form-group col-md-6">
                <label htmlFor="inst">Nome da Instituição</label>
                <h3>
                  {/* <span class="badge badge-success">{atividade.institutionName}</span> */}
                </h3>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="aluno">Nome do Aluno</label>
                  <h3>
                    <span class="badge badge-success">
                      {/* {atividade.userName} */}
                    </span>
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="atividade">Atividade Complementar</label>
                  <h3>
                    <span class="badge badge-success">
                      {/* {atividade.description} */}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="mod">Modalidade</label>
                  <h3>
                    {/* <span class="badge badge-success">{atividade.name_cat}</span> */}
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="ativ">Atividade</label>
                  <h3>
                    <span class="badge badge-success">
                      {/* {atividade.activityName} */}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="qtd">Quantidades de Horas</label>
                  <h3>
                    <span class="badge badge-success">30h</span>
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="qtd">Horas Validadas</label>
                  <h3>
                    <span class="badge badge-success">45h</span>
                  </h3>
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="date">Data de Conclusão</label>
                  <h3>
                    <span class="badge badge-success">20/11/2020</span>
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Anexo</label>
                  <h3>
                    <span class="badge badge-success">Certificado.pdf</span>
                  </h3>
                </div>
              </div>
              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="date">Status</label>
                  <h3>
                    <span class="badge badge-warning">Em Andamento</span>
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Responsavel</label>
                  <h3>
                    <span class="badge badge-secondary">Tiago Asp</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="btn-salve">
              <button className="btn btn-secondary">Editar</button>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Enviar comentario
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
                Enviar Comentario
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
              <h5>Deixe aqui o seu comentario!</h5>

              <form>
                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <input className="form-control" type="text" id="assunto" />
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
    </>
  );
}
