import React from 'react';
import logo from '../../images/logo.svg';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Title,
  Container,
  ContainerButtons,
  Pergunta,
  Button,
  ButtonSim,
} from './styled';
export default function AlunoEventoSenai() {
  return (
    <>
      <Header
        image={logo}
        text="Imagem da Logo"
        title="Atividades Complementares"
        ensino="Ensino"
        pesquisa="Pesquisa"
        extencao="Extenção"
        total="Total"
      />

      <Title>Adicionar Atividade</Title>
      <Container>
        <Pergunta>É um evento do Senai?</Pergunta>
        <ContainerButtons>
          <ButtonSim>Sim</ButtonSim>
          <Button>Não</Button>
        </ContainerButtons>
      </Container>
    </>
  );
}
