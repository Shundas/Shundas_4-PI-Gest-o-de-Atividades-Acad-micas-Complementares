import React from 'react';
import logo from '../../images/logo.svg';
import Header from '../../components/Header';

import { Title, Container } from './styled';
export default function AlunoEvento() {
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

      <Container></Container>
    </>
  );
}
