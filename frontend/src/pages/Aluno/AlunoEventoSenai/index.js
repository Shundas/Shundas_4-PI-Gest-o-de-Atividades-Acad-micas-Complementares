import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import logo from '../../../images/logo.svg';
import axios from '../../../services/api';


const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;

  input {
    width: 530px;
  }

  input {
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

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

export default function AlunoEventoSenai() {
  
  const [formData, setFormData] = useState({
    activityName: '',
    date_end: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmmit(event) {
    event.preventDefault();

    const { activityName, date_end } = formData;

    const data = {
      activityName: activityName,
      date_end: date_end
    }

    await axios
      .post('/criarAtividadeSenai', data, {
        params: {
          iduser: '283ed9c58b81d66a',
          iduserSenai: '63e02be21c18344d',
        },
      })
      .then(response => {
        console.log(response.data);
      });
  }

  return (
    <>
      <Header image={logo} text="Imagem Logo" />

      <Nopit>
        <Link to="/senai-atividade" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/aluno-home" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <Title>Solicitar certificado evento Senai</Title>

      <ContainerApp className="container">
        <form onSubmit={handleSubmmit}>
          <div className="form-group">
            <label htmlFor="event">Evento</label>
            <input type="text" id="activityName" className="form-control" onChange={handleInputChange} name="activityName" />
          </div>

          <div className="form-group">
            <label htmlFor="date">Data do Evento</label>
            <input type="date" id="date" className="form-control" onChange={handleInputChange} name="date_end" />
          </div>

          <div className="btns">
            <button className="btn btn-primary">Salvar</button>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
