import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

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
    justify-content: space-between;

    button {
      width: 300px;
      border-radius: 6px;
      margin-top: 9px;
    }
  }
`;

const SubTitle = styled.h2``;

export default function Coordenador() {
  return (
    <>
      <Header />
      <ContainerApp className="container">
        <form className="form">
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
                  />
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="mod">Modalidade</label>
                  <select className="form-control" id="profile"></select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="ativ">Atividade</label>
                  <select className="form-control" id="activity"></select>
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
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Anexo</label>
                  <button className="btn btn-outline-secondary">
                    <input type="file" id="fil" className="form-control-file" />
                  </button>
                </div>
              </div>
              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="date">Status</label>
                  <select className="form-control" id="profile"></select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Responsavel</label>
                  <select className="form-control" id="profile"></select>
                </div>
              </div>
            </div>
            <div className="btn-salve">
              <button className="btn btn-primary">Rejeitar</button>
              <button className="btn btn-primary">Voltar Assistente</button>
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Encaminhar Secretaria
              </button>
            </div>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
