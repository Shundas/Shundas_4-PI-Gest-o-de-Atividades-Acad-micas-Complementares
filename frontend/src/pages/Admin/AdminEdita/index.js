import React, { Fragment } from 'react';
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

  .form .fr label {
    margin-bottom: 7px;
    margin-top: 12px;
  }
`;

export default function AdminCadastroUser() {
  return (
    <Fragment>
      <Header />
      <h2 style={{ marginTop: '2em' }} className="text-center">
        Edição de Aluno
      </h2>
      <Container>
        <div>
          <form className="form">
            <div className="form-group fr">
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

              <label htmlFor="">Ativo</label>
              <input type="checkbox" id="" />
            </div>
            <div className="btns">
              <button className="btn btn-primary">Salvar</button>
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}
