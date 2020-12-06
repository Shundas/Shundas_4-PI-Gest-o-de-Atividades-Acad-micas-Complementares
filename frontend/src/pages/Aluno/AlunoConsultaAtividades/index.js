import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import logo from '../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Text, Container } from './styled';
export default function AlunoConsultaAtividades() {
  return (
    <>
      <Header image={logo} text="Imagem da Logo" />
      <Text>Consulta de Atividades</Text>
      <Container className="container-fluid raw">
        <form className="form-row">
          <div className="form-column">
            <label htmlFor="#inp1">ID</label>
            <div>
              <input type="text" id="inp1" />
              <FiPlus size={20} />
            </div>
          </div>
          <div className="form-column">
            <label htmlFor="#inp1">Atividade Complementar</label>
            <div>
              <input type="text" id="inp1" />
              <FiPlus size={20} />
            </div>
          </div>
          <div className="form-column">
            <label htmlFor="#inp1">Modalidade/Atividade</label>
            <div>
              <input type="text" id="inp1" />
              <FiPlus size={20} />
            </div>
          </div>
          <div className="form-column">
            <label htmlFor="#inp1">Status</label>
            <div>
              <input type="text" id="inp1" />
              <FiPlus size={20} />
            </div>
          </div>
          <div className="form-column">
            <label htmlFor="#inp1">Responsável</label>
            <div>
              <input type="text" id="inp1" />
              <FiPlus size={20} />
            </div>
          </div>
          <div className="ctx">
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
                <a href="#" className="btn btn-success">
                  Vizualizar
                </a>
              </td>
            </tr>
            <tr>
              <td>111</td>
              <td>Curso de Inglês</td>
              <td>Ensino</td>
              <td>Em andamento</td>
              <td>Jubyscleison</td>
              <td>
                <a href="#" className="btn btn-success">
                  Vizualizar
                </a>
              </td>
            </tr>
            <tr>
              <td>111</td>
              <td>Curso de Inglês</td>
              <td>Ensino</td>
              <td>Em andamento</td>
              <td>Jubyscleison</td>
              <td>
                <a href="#" className="btn btn-success">
                  Vizualizar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
