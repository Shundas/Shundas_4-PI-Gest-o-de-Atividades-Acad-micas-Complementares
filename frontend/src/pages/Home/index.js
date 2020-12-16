import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../components/HeaderLogin';

const ContainerApp = styled.div``;
const Title = styled.h2``;
const Divider = styled.div``;

export default function TelaHome() {
  return (
    <>
      <Header />

      <ContainerApp className="container">
        <Title>Seja bem vindo ao sistema!</Title>
        <Divider>
          <Link to="/aluno-login">Sou Aluno</Link>
          <Link to="/colaborador-login">Sou Colaborador</Link>
        </Divider>
      </ContainerApp>
    </>
  );
}
