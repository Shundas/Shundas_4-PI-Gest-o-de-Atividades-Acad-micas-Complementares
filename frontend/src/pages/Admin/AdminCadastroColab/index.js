import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .btns {
    display: flex;
    flex-direction: column;
  }

  .btns button:nth-child(1) {
    margin-bottom: 1rem;
  }
`;

export default function AdminCadastroColab() {
  return (
    <Fragment>
      <Header />
      <h2 style={{ marginTop: '2em' }} className="text-center">
        Cadastro de Colaborador
      </h2>
      <div className="container">
        <Container>
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
              <label htmlFor="select">Perfil</label>
              <select id="perfil" className="form-control">
                <option value="2">Colaborador</option>
                <option value="1">Aluno</option>
              </select>
            </div>
            <div className="btns">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              <Link to="/question" className="btn btn-secondary">
                Voltar
              </Link>
            </div>
          </form>
        </Container>
      </div>
    </Fragment>
  );
}
