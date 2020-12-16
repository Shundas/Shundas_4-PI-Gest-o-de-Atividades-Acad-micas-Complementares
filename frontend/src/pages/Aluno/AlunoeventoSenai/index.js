import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Header from '../../../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';

import {
  Title,
  Container,
  ContainerButtons,
  Pergunta,
  Button,
  ButtonSim,
} from './styled';

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
export default function PageAlunoEventoSenai() {
  return (
    <>
      <Header image={logo} text="Imagem da Logo" />
      <Nopit>
        <Link to="/aluno-home" className="btn btn-success button">
          <FiArrowLeft />
        </Link>
      </Nopit>
      <Title>Adicionar Atividade</Title>
      <Container>
        <Pergunta>É um evento do Senai?</Pergunta>
        <ContainerButtons>
          <Link
            className="tolink"
            to="/evento-senai"
          >
            <ButtonSim>Sim</ButtonSim>
          </Link>
          <Link
            className="tolink"
            to="/atividade"
          >
            <Button>Não</Button>
          </Link>
        </ContainerButtons>
      </Container>
    </>
  );
}
