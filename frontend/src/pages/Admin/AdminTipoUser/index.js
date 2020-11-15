import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6em;

  h5 {
    margin-bottom: 2rem;
  }

  .btns-container button {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export default function AdminTipoUser() {
  return (
    <Fragment>
      <Header />
      <h1 style={{ marginTop: '2em' }} className="text-center">
        Criar Usuário
      </h1>

      <Container>
        <h5 className="text-center">Qual o tipo de usuário ?</h5>

        <div className="btns-container">
          <button className="btn btn-primary">Aluno</button>
          <button className="btn btn-success">Colaborador</button>
        </div>
      </Container>
    </Fragment>
  );
}
