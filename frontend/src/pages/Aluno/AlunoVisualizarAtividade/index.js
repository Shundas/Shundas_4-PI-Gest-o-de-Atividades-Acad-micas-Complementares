import React from 'react';
import Header from '../../components/Header';
import { Text, Container, SubText } from './styled';
import logo from '../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

export default function AlunoVisualisarAtividades() {
  return (
    <>
      <Header image={logo} text="Imagem da Logo" />
      <Text>Visualizar Atividade</Text>
      <Container className="container">
        <form className="form-column f-raw">
          <SubText>Detalhes</SubText>
          <div className="form-row">
            <label htmlFor="#inp1">Nome da Instituição</label>
            <input className="form-control" type="text" id="inp1" />
          </div>
          <div className="form-row">
            <label htmlFor="#inp2">Atividade Complementar</label>
            <input className="form-control" type="text" id="inp2" />
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Modalidade</label>
            <select id="" className="form-control">
              <option value="">Select option</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Atividade</label>
            <select id="" className="form-control">
              <option value="">Select option</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Quantidade de Horas</label>
            <input className="form-control" type="number" id="inp1" />
          </div>
          <div className="form-row">
            <label htmlFor="">Horas Validadas</label>
            <input className="form-control" type="number" id="inp1" />
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Data de Conclusão</label>
            <input className="form-control" type="date" id="inp1" />
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Anexo</label>
            <input className="form-control-file" type="file" id="inp1" />
          </div>
          <div className="form-row">
            <h5>
              Status <span class="badge badge-warning">Em andamento</span>
            </h5>
          </div>
          <div className="form-row">
            <h5>
              Responsavel <span class="badge badge-success">Jubyscleison</span>
            </h5>
          </div>
          <div className="form-row">
            <button className="btn btn-secondary">Editar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
