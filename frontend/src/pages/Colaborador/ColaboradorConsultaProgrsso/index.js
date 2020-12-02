import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .cen {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 14px;
    padding-right: 14px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  margin-top: 3em;
`;

export default function PageConsultaProgresso() {
  return (
    <>
      <Header />

      <Title>Consultar Progresso</Title>

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
    </>
  );
}
