import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 14px;

  .cen {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 14px;
    padding-right: 14px;
  }
`;

const ContainerAppColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  .card {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export default function PageColaboradorTarefas() {
  return (
    <>
      <Header />

      <Title>Tarefas</Title>

      <ContainerApp className="container">
        <form className="form-row">
          <div className="form-column">
            <input
              className="form-control"
              type="text"
              id="id1"
              placeholder="Nome"
            />
          </div>

          <div className="cen">
            <span>{'='}</span>
          </div>

          <div className="form-column">
            <input
              className="form-control"
              type="text"
              id="id1"
              placeholder="Nome"
            />
          </div>

          <div className="btns">
            <button className="btn btn-primary">Filtrar</button>
          </div>
        </form>
      </ContainerApp>

      <ContainerAppColumn className="container">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </ContainerAppColumn>
    </>
  );
}
