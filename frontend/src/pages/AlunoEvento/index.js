import React from 'react';
import logo from '../../images/logo.svg';
import Header from '../../components/Header';
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
    </>
  );
}
