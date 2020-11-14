import React, { Fragment } from 'react';
import Header from '../../components/Header';
import { Container } from './styled';
import logo from '../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
export default function ConsultaRegras() {
  return (
    <Fragment>
      <Header
        image={logo}
        text="Imagem da Logo"
        title="Atividades Complementares"
        ensino="Ensino"
        pesquisa="Pesquisa"
        extencao="Extenção"
        total="Total"
      />

      <Container className="container">
        <h3 className="text-center">
          Regras para as Atividades Acadêmicas Complementares
        </h3>
        <table className="table">
          <thead className="bg-success">
            <tr>
              <th scope="col" style={{ color: '#fff' }}>
                Atividade
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Carga Horaria Equivalente
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Documentação Exigida
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aula Inaugural</td>
              <td>4h</td>
              <td>Lista de Presença</td>
            </tr>
            <tr>
              <td>Monitoria Acadêmica</td>
              <td>Máximo 40h</td>
              <td>Declaração da Instituição</td>
            </tr>
            <tr>
              <td>Visita Técnica</td>
              <td>4h por visita, máximo 20h</td>
              <td>Lista de Presença</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}
