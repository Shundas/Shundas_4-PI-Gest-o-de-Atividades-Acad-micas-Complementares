import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 2em;

  .cen {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 14px;
    padding-right: 14px;
  }
`;
const TitleH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export default function PageColaboradorConsultaAtividade() {
  return (
    <>
      <Header />
      <TitleH2>Consultar Atividade</TitleH2>

      <ContainerApp className="container">
        <form className="form-row">
          <div className="form-column">
            <input
              className="form-control"
              type="text"
              id="id1"
              placeholder="Nome"
            />
          </div>

          <div className="cen">
            <span>{'='}</span>
          </div>

          <div className="form-column">
            <input
              className="form-control"
              type="text"
              id="id1"
              placeholder="Nome"
            />
          </div>

          <div className="btns">
            <button className="btn btn-primary">Filtrar</button>
          </div>
        </form>
      </ContainerApp>

      <ContainerApp className="container">
        <table className="table">
          <thead className="bg-success">
            <tr>
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
                Aluno
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
              <td>Curso de Inglês</td>
              <td>Ensino</td>
              <td>Em andamento</td>
              <td>Shundas</td>
              <td>Jubyscleison</td>
              <td>
                <button className="btn btn-outline-success">Vizualizar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerApp>
    </>
  );
}
