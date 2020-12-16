import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
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

const Nopit = styled.div`
  position: absolute;

  border: 0;

  top: 90px;
  left: 30px;

  width: 38px;
  height: 38px;
  background: #28a745 !important;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  cursor: pointer;
`;

export default function AlunoEventoSenai() {
  return (
    <>
      <Header image={logo} text="Imagem Logo" />

      <Nopit>
        <Link to="/senai-atividade" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/aluno-home" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

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
