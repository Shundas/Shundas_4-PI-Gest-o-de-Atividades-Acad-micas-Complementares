import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6em;

  h5 {
    margin-bottom: 2rem;
  }

  .btns-container .button {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  div .back {
    position: absolute;

    border: 0;

    top: 90px;
    left: 10px;

    width: 38px;
    height: 38px;
    background: #28a745 !important;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10;

    cursor: pointer;
  }
`;

export default function AdminTipoUser() {
  return (
    <Fragment>
      <Header />
      <h1 style={{ marginTop: '2em' }} className="text-center">
        Qual tipo de usuário deseja consultar?
      </h1>

      <Container>
        {/* <h5 className="text-center">Qual o tipo de usuário ?</h5> */}

        <div className="btns-container">
          <Link to="/consultaluno" className="btn btn-primary button">
            Aluno
          </Link>
          <Link to="/consultcolaborador" className="btn btn-success button">
            Colaborador
          </Link>
        </div>

        <div>
          <Link className="back" to="/">
            <FiArrowLeft size={25} color="#fff" />
          </Link>
        </div>
      </Container>
    </Fragment>
  );
}
