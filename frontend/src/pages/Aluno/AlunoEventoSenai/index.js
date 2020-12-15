import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/Header';
import logo from '../../../images/logo.svg';

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;

  input {
    width: 530px;
  }

  input {
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export default function AlunoEventoSenai() {
  return (
    <>
      <Header image={logo} text="Imagem Logo" />

      <Title>Solicitar certificado evento Senai</Title>

      <ContainerApp className="container">
        <form>
          <div className="form-group">
            <label htmlFor="event">Evento</label>
            <input type="text" id="event" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="date">Data do Evento</label>
            <input type="date" id="date" className="form-control" />
          </div>

          <div className="btns">
            <button className="btn btn-primary">Salvar</button>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
