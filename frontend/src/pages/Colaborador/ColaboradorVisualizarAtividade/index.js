import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  margin-top: 2em;

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

export default function PageColaboradorVisualizarAtividade() {
  return (
    <>
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
                  <span class="badge badge-success">Senai CTAI</span>
                </h3>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="aluno">Nome do Aluno</label>
                  <h3>
                    <span class="badge badge-success">
                      João Boquinha de Veludo
                    </span>
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="atividade">Atividade Complementar</label>
                  <h3>
                    <span class="badge badge-success">
                      Como ser um Boca de Veludo
                    </span>
                  </h3>
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="mod">Modalidade</label>
                  <h3>
                    <span class="badge badge-success">Ensino</span>
                  </h3>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="ativ">Atividade</label>
                  <h3>
                    <span class="badge badge-success">
                      Introdução em como ser um Boca de Veludo
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
