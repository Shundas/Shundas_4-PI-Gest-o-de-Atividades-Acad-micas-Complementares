import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../../services/api';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  margin-top: 2em;
  margin-bottom: 1em;
  .divider {
    width: 100%;
    display: flex;
  }
  .container-divider {
    width: 100%;
    display: flex;
  }
  .btn-salve {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    button {
      width: 500px;
      border-radius: 6px;
      margin-top: 9px;
    }
  }
`;

const TitleH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2em;
`;

export default function PageColaboradorAdicionarAtividade() {
  const [category, setCategory] = useState([]);
  const [activity, setActivity] = useState([]);
  const [institutionName, setInstutionName] = useState('');
  const [activityName, setActivityName] = useState('');
  const [informedWorkload, setInformeWorkLoad] = useState('');
  const [date_end, setDateEnd] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedActivity, setSelectedActivity] = useState('0');
  const [selectedFile, setSelectedFile] = useState();

  const handleSubmit = useCallback(async e => {
    e.preventDefault();
  });

  return (
    <>
      <Header />
      <TitleH2>Adicionar Atividade</TitleH2>

      <ContainerApp className="container">
        <form className="form">
          <div className="form-column">
            <div>
              <div className="form-group col-md-6">
                <label htmlFor="inst">Nome da Instituição</label>
                <input className="form-control" type="text" id="inst" />
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="aluno">Nome do Aluno</label>
                  <input className="form-control" type="text" id="aluno" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="atividade">Atividade Complementar</label>
                  <input className="form-control" type="text" id="atividade" />
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="mod">Modalidade</label>
                  <input className="form-control" type="text" id="mod" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="ativ">Atividade</label>
                  <input className="form-control" type="text" id="ativ" />
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="qtd">Quantidades de Horas</label>
                  <input className="form-control" type="text" id="qtd" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="qtd">Horas Validadas</label>
                  <input className="form-control" type="text" id="qtd" />
                </div>
              </div>

              <div className="container-divider">
                <div className="form-group col-md-6">
                  <label htmlFor="date">Data de Conclusão</label>
                  <input className="form-control" type="text" id="date" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="fil">Anexar Arquivo</label>
                  <input className="form-control-file" type="file" id="fil" />
                </div>
              </div>
            </div>
            <div className="btn-salve">
              <button className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
