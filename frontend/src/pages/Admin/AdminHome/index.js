import React, { Fragment } from 'react';
import Header from '../../../components/HeaderAdmin';
import Cards from '../../../components/CardsAdmin';
import 'bootstrap/dist/css/bootstrap.css';

export default function AdminHome() {
  return (
    <Fragment>
      <Header />

      <div className="container">
        <Cards />
      </div>
    </Fragment>
  );
}
