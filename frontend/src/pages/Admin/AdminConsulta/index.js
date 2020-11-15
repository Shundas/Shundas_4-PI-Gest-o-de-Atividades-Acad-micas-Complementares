import React, { Fragment } from 'react';
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

export default function AdminConsulta() {
  return (
    <Fragment>
      <Header />

      <div className="container">
        <h2 style={{ marginTop: '2em' }} className="text-center">
          Consulta de Usuário
        </h2>
      </div>

      <Container className="container">
        <form className="form-row">
          <div className="form-column">
            <label htmlFor="id1">Nome</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="form-column">
            <label htmlFor="id1">Perfil</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="form-column">
            <label htmlFor="id1">E-mail</label>
            <input className="form-control" type="text" id="id1" />
          </div>
          <div className="form-column">
            <label htmlFor="id1">Telefone</label>
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
                ID
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Atividade Complementar
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Modalidade/Atividade
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Status
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Responsavel
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>111</td>
              <td>Curso de Inglês</td>
              <td>Ensino</td>
              <td>Em andamento</td>
              <td>Jubyscleison</td>
              <td>
                <button className="btn btn-outline-success">Vizualizar</button>
                <button className="btn btn-outline-primary">Editar</button>
              </td>
            </tr>
            <tr>
              <td>111</td>
              <td>Curso de Inglês</td>
              <td>Ensino</td>
              <td>Em andamento</td>
              <td>Jubyscleison</td>
              <td>
                <button className="btn btn-outline-success">Vizualizar</button>
                <button className="btn btn-outline-primary">Editar</button>
              </td>
            </tr>
            <tr>
              <td>111</td>
              <td>Curso de Inglês</td>
              <td>Ensino</td>
              <td>Em andamento</td>
              <td>Jubyscleison</td>
              <td>
                <button className="btn btn-outline-success">Vizualizar</button>
                <button className="btn btn-outline-primary">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}
