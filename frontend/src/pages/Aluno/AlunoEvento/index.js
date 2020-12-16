import React, { useEffect, useState } from 'react';

import axios from '../../../services/api';
import logo from '../../../images/logo.svg';
import Header from '../../../components/Header';
import { Title, Container } from './styled';
import { useHistory, Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';

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

export default function AlunoEvento() {
  const history = useHistory();

  const [category, setCategory] = useState([]);
  const [activity, setActivity] = useState([]);
  const [formData, setFormData] = useState({
    institutionName: '',
    activityName: '',
    informedWorkload: '',
    date_end: '',
  });

  const [erros, setErros] = useState({
    msg: '',
    erro: '',
  });

  const validacao = Object.entries(erros).length;

  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedActivity, setSelectedActivity] = useState('0');
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    axios.get('/category').then(response => {
      setCategory(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === '0') {
      return;
    }

    axios
      .get('/activity', {
        params: {
          idcategory: selectedCategory,
        },
      })
      .then(response => {
        setActivity(response.data);
      });
  }, [selectedCategory]); //quando q essa função deve executar

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleUploadFile = e => setSelectedFile(e.target.files[0]);

  async function handleSubmmit(event) {
    event.preventDefault();

    const {
      institutionName,
      informedWorkload,
      activityName,
      date_end,
    } = formData;
    const category = selectedCategory;
    const activity = selectedActivity;

    const data = new FormData();

    data.append('file', selectedFile);
    data.append('institutionName', institutionName);
    data.append('informedWorkload', informedWorkload);
    data.append('activityName', activityName);
    data.append('date_end', date_end);
    data.append('idcategory', category);
    data.append('idactivity', activity);

    await axios
      .post('/criarAtividade', data, {
        params: {
          iduser: '2180d6ffa058e697',
          iduserSenai: '76649b06d9d8eaa5',
        },
      })
      .then(response => {
        setErros(response.data);
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

      <Title>Adicionar Atividade</Title>
      <Container className="container">
        {console.log(erros)}
        {erros.msg === '' && erros.erro === '' ? '' : ''}
        {erros.msg === '' && validacao === 2 ? (
          ''
        ) : (
          <>
            <div className="alert alert-success">
              Atividade Registrada com Sucesso! {erros.msg}
            </div>
            {console.log(erros.msg)}
            {setTimeout(() => {
              history.push('/aluno-home');
            }, 5000)}
          </>
        )}

        {erros.erro === '' || validacao == 1 ? (
          ''
        ) : (
          <div className="alert alert-danger">{erros.erro}</div>
        )}
        <form onSubmit={handleSubmmit}>
          <div className="form-column raw">
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="name">Nome da Instituição</label>
                <input
                  type="text"
                  name="institutionName"
                  id="institutionName"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Nome da Instituição"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="atd">Atividade Complementar</label>
                <input
                  type="text"
                  name="activityName"
                  id="activityName"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Atividade Complementar"
                />
              </div>
            </div>
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="main-text">Modalidade</label>

                <select
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="form-control"
                  id="profile"
                >
                  <option value="0">Selecione</option>
                  {category.map(cat => (
                    <option key={cat.idcategory} value={cat.idcategory}>
                      {cat.name_cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="main-text-2">Atividade</label>
                <select
                  onChange={e => setSelectedActivity(e.target.value)}
                  className="form-control"
                  id="profile"
                >
                  <option value="0">Selecione</option>
                  {activity.map(act => (
                    <option key={act.idactivity} value={act.idactivity}>
                      {act.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="main-text">Quantidade de Horas</label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  name="informedWorkload"
                  id="informedWorkload"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Suas horas validadas"
                />
              </div>
            </div>
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="name">Data de Conclusão</label>
                <input
                  type="date"
                  name="date_end"
                  id="date_end"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Nome da Instituição"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Arquivo</label>

                <input
                  type="file"
                  id="file"
                  className="file"
                  onChange={handleUploadFile}
                  accept="image/jpeg, image/png, application/pdf"
                />
              </div>
            </div>
            <div className="btn-salve">
              <button className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
