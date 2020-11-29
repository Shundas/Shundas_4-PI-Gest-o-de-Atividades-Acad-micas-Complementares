import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  margin-bottom: 1em;

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

export default function PageColaboradorComentarios() {
  return (
    <>
      <Header />
      <TitleH2>Comentários</TitleH2>
      <ContainerApp className="container">
        <h4 for="exampleFormControlTextarea1">Comentado por Aluno:</h4>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h5 className="lead">Olá, temos uma previsão para finalização?</h5>
          </div>
        </div>

        <h4 for="exampleFormControlTextarea1">Comentado por SENAI:</h4>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h5 className="lead">Ainda não, se acalma ai guerrero.</h5>
          </div>
        </div>
        <div className="btn-salve">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Novo Comentário
          </button>
        </div>
      </ContainerApp>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Enviar Comentário
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
              <form>
                <div className="form-group">
                  <label htmlFor="assunto">Aluno</label>
                  <input className="form-control" type="text" id="assunto" />
                </div>
                <div className="form-group">
                  <label htmlFor="assunto">Comentario</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
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
