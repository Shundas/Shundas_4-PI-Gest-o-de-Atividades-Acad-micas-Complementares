import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import logo from '../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Text, Container } from './styled';
export default function AlunoConsultaAtividades() {
  return (
    <>
      <Header
        image={logo}
        text="Imagem da Logo"
        title="Atividades Complementares"
        ensino="Ensino"
        pesquisa="Pesquisa"
        extencao="Extenção"
        total="Total"
      />
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
    </>
  );
}
