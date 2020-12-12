import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Header from '../../../components/Header';
import logo from '../../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Text, Container } from './styled';
import axios from '../../../services/api';


export default function ColaboradorConsultaAtividades() {
  const [atividade, setAtividade] = useState([
    {
      idform: '',
      activityName: '',
      description: '',
      name_cat: '',
      userName: '',
      status: '',
      name: '',
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
            {atividade.map(atv => (
              <tr key={atv.idform}>
                <td>{atv.idform}</td>
                <td>{atv.activityName}</td>
                <td>{atv.name_cat}</td>
                <td>{atv.description}</td>
                <td>{atv.status}</td>
                <td>{atv.userName}</td>
                <td>{atv.name}</td>
                <Link
                  className="tolink"
                  to={`/visualiza-atividade-colaborador/${atv.idform}`}
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
