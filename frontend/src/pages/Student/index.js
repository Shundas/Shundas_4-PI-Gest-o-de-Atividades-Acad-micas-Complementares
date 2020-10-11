import React from 'react';

import Header from '../../components/Header';
import Cards from '../../components/Cards';

import logo from '../../images/logo.svg';

export default function Study() {
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

      <Cards />
    </>
  );
}
