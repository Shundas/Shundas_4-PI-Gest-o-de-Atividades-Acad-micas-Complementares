import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  margin-top: 3em;

  .alinhar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1em;
  }
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export default function PageColaboradorConsultaRegras() {
  return (
    <>
      <Header />
      <Title>Consultar Regras</Title>
      <ContainerApp className="container">
        <div className="alinhar">
          <button className="btn btn-primary">Saiba Mais</button>
        </div>
        <table className="table">
          <thead className="bg-success">
            <tr>
              <th scope="col" style={{ color: '#fff' }}>
                Atividade
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Carga Horária Equivalente
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Documentação Exigida
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aula Inaugural</td>
              <td>4H</td>
              <td>Lista de Presença</td>
            </tr>
            <tr>
              <td>Aula Inaugural</td>
              <td>4H</td>
              <td>Lista de Presença</td>
            </tr>
            <tr>
              <td>Aula Inaugural</td>
              <td>4H</td>
              <td>Lista de Presença</td>
            </tr>
          </tbody>
        </table>
      </ContainerApp>
    </>
  );
}
