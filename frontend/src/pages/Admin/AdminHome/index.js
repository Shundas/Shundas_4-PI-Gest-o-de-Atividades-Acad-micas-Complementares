import React, { Fragment } from 'react';
import Header from '../../../components/Header';
import logo from '../../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

export default function AdminHome() {
  return (
    <Fragment>
      <Header
        image={logo}
        text="Imagem da Logo"
        title="Atividades Compementares"
      />
    </Fragment>
  );
}
