import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../components/HeaderLogin';

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 70px 0px;

  margin-top: 6em;

  box-shadow: -1px 1px 16px -13px rgba(0, 0, 0, 0.65);
`;
const Title = styled.h2`
  margin-bottom: 1em;
`;
const Divider = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function TelaHome() {
  return (
    <>
      <Header />

      <ContainerApp className="container">
        <Title>Seja bem vindo ao sistema!</Title>
        <Divider>
          <Link className="btn btn-primary" to="/aluno-login">
            Sou Aluno
          </Link>
          <Link className="btn btn-primary" to="/colaborador-login">
            Sou Colaborador
          </Link>
        </Divider>
      </ContainerApp>
    </>
  );
}
