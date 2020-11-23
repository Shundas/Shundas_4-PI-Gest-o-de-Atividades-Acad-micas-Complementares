import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import api from '../../../services/api';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .raw {
    margin-top: 3em;
  }
`;

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

export default function AdminConsulta() {
  const [consultadados, setConsultaDados] = useState([]);

  useEffect(() => {
    async function getConsultaDados() {
      await api.get('/consultaAluno').then(x => setConsultaDados(x.data));
    }
    getConsultaDados();
  }, []);

  return (
    <Fragment>
      <Header />

      <div className="container">
        <h2 style={{ marginTop: '2em' }} className="text-center">
          Consulta de Usuário
        </h2>
      </div>

      <Nopit>
        <Link to="/question-consult" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <Container className="container">
        <form className="form-row">
          <div className="form-column">
            <label htmlFor="id1">Nome</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="form-column">
            <label htmlFor="id1">E-mail</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="form-column">
            <label htmlFor="id1">CPF</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="form-column">
            <label htmlFor="id1">Ativo</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="btns">
            <button className="btn btn-primary">Filtrar</button>
          </div>
        </form>
      </Container>

      <Container className="container-fluid">
        <table className="table">
          <thead className="bg-success">
            <tr>
              <th scope="col" style={{ color: '#fff' }}>
                Nome
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Email
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                CPF
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Telefone
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {consultadados.map(x => (
              <tr key={x.iduser}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.cpf}</td>
                <td>{x.phone}</td>

                <td>
                  <button className="btn btn-outline-success">
                    Vizualizar
                  </button>
                  <button className="btn btn-outline-primary">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}
