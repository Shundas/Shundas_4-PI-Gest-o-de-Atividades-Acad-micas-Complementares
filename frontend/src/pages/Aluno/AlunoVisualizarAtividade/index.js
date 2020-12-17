import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FileDown from 'js-file-download';
import Header from '../../../components/Header';
import { Text, Container, SubText, Nopit } from './styled';
import logo from '../../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import axios from '../../../services/api';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

//Tela pendente ainda!
export default function AlunoVisualisarAtividades() {
  const { id } = useParams();

  console.log(id);
  const [download, setDownload] = useState({
    image_url: '',
  });

  const [atividade, setAtividade] = useState({
    institutionName: '',
    activityName: '',
    name_cat: '',
    name: '',
    institutionName: '',
    description: '',
    status: '',
    attachment: '',
    workload: '',
    informedWorkload: '',
    date_end: '',
  });

  useEffect(() => {
    axios.get(`/visualizarAtividade/${id}`).then(response => {
      console.log(response.data);
      setAtividade(response.data.atividades);
      setDownload(response.data.download);
    });
  }, []);

  //Formatação da Data
  function adicionaZero(numero) {
    if (numero <= 9) return '0' + numero;
    else return numero;
  }

  atividade.date_end = new Date(atividade.date_end);
  let dataFormatada =
    atividade.date_end.getFullYear() +
    '-' +
    adicionaZero(atividade.date_end.getMonth()) +
    '-' +
    adicionaZero(atividade.date_end.getDate());

  //Função para fazer Download de Arquivo
  function handleDownload(event) {
    event.preventDefault();
    axios
      .get(`/download/${id}`, {
        responseType: 'blob',
      })
      .then(response => {
        FileDown(response.data, atividade.attachment);
      });
  }

  return (
    <>
      <Header image={logo} text="Imagem da Logo" />

      <Nopit>
        <Link to="/senai-atividade" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/aluno-home" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <Text className="text-center">Visualizar Atividade</Text>
      <Container className="container">
        <form className="form-column f-raw">
          <SubText>Detalhes</SubText>
          <div className="form-row">
            <label htmlFor="#inp1">Nome da Instituição</label>
            <input
              className="form-control"
              type="text"
              name="institutionName"
              id="institutionName"
              value={atividade.institutionName}
              disabled
            />
          </div>
          <div className="form-row">
            <label htmlFor="#inp2">Atividade Complementar</label>
            <input
              className="form-control"
              type="text"
              id="inp2"
              value={atividade.activityName}
              disabled
            />
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Modalidade</label>
            <select id="" className="form-control" disabled>
              <option value="">{atividade.name_cat}</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Atividade</label>
            <select id="" className="form-control" disabled>
              <option value="">{atividade.description}</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Quantidade de Horas</label>
            <input
              className="form-control"
              type="number"
              id="inp1"
              value={atividade.informedWorkload}
              disabled
            />
          </div>
          <div className="form-row">
            <label htmlFor="">Horas Validadas</label>
            <input
              className="form-control"
              type="number"
              id="inp1"
              value={atividade.workload}
              disabled
            />
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Data de Conclusão</label>
            <input
              className="form-control"
              type="date"
              id="inp1"
              value={dataFormatada}
              disabled
            />
          </div>
          <div className="form-row">
            <label htmlFor="#inp1">Anexo</label>
            <button onClick={handleDownload}>Download File</button>
          </div>
          <div className="form-row">
            <h5>
              Status <span class="badge badge-warning">{atividade.status}</span>
            </h5>
          </div>
          <div className="form-row">
            <h5>
              Responsável{' '}
              <span class="badge badge-success">{atividade.name}</span>
            </h5>
          </div>
        </form>
      </Container>
    </>
  );
}
