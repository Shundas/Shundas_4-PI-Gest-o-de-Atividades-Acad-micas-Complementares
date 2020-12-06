import React from 'react';
import Header from '../../../components/Header';
import Cards from '../../../components/Cards';
import logo from '../../../images/logo.svg';
export default function AlunoHome() {
  return (
    <>
      <Header image={logo} text="Imagem da Logo" />

      <div className="container">
        <Cards />
      </div>
    </>
  );
}
