import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }

  .btns button:nth-child(1) {
    margin-bottom: 1rem;
  }
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

export default function AdminCadastroUser() {
  return (
    <Fragment>
      <Header />
      <h2 style={{ marginTop: '2em' }} className="text-center">
        Cadastro de Usuário
      </h2>

      <Nopit>
        <Link to="/question" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <Container>
        <div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input className="form-control" type="text" id="name" />
              <label htmlFor="email">E-mail</label>
              <input className="form-control" type="email" id="email" />
              <label htmlFor="telefone">Telefone</label>
              <input className="form-control" type="text" id="telefone" />
              <label htmlFor="celular">Celular</label>
              <input className="form-control" type="text" id="celular" />
              <label htmlFor="select">Curso</label>
              <select id="perfil" className="form-control">
                <option value="1">Analise e Desenvolvimento de Sistemas</option>
                <option value="2">Redes de Computadores</option>
                <option value="2">Jogos Digitais</option>
              </select>

              <label htmlFor="select">Turma</label>
              <select id="perfil" className="form-control">
                <option value="1">Turma</option>
                <option value="2">Redes de Computadores</option>
                <option value="2">Jogos Digitais</option>
              </select>
            </div>
            <div className="btns">
              <button className="btn btn-primary">Enviar</button>
              <Link to="/question" className="btn btn-secondary">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}
