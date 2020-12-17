import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Header from '../../../components/Header';
import logo from '../../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Text, Container } from './styled';
import axios from '../../../services/api';
import styled from 'styled-components';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

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

export default function AlunoConsultaAtividades() {
  const [atividade, setAtividade] = useState([
    {
      idform: '',
      activityName: '',
      description: '',
      name_cat: '',
      name: '',
      status: '',
      userName: '',
    },
  ]);

  useEffect(() => {
    axios.get('/listarAtividade').then(response => {
      setAtividade(response.data);
    });
  }, []);

  return (
    <>
    
      <Header image={logo} text="Imagem da Logo" />
      <Nopit>
        <Link to="/aluno-home" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
      </Nopit>

      <Text>Consulta de Atividades</Text>

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
                Modalidade
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Atividade
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
            {atividade.map(atv => (
              <tr key={atv.idform}>
                <td>{atv.idform}</td>
                <td>{atv.activityName}</td>
                <td>{atv.name_cat}</td>
                <td>{atv.description}</td>
                <td>{atv.status}</td>
                <td>{atv.name}</td>
                <Link
                  className="tolink"
                  to={`/visualiza-atividade/${atv.idform}`}
                >
                  <button className="btn btn-outline-success">
                    Visualizar
                  </button>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
