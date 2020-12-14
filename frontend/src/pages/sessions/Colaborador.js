import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../services/api';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../components/HeaderLogin';

const ContainerApp = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2em;

  padding: 20px;
  border: 1px solid #fff;
  background: #fff;

  border-radius: 20px;
  box-shadow: -1px 1px 16px -9px rgba(0, 0, 0, 0.65);

  input {
    width: 500px;
  }

  .opt {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 180px;
    }
  }
`;

export default function PageSessionAluno() {
  const [formData, setFormData] = React.useState({
    email: '',
    senha: '',
  });

  const [erros, setErros] = React.useState({
    msg: '',
    erro: '',
  });

  const validacao = Object.entries(erros).length;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { email, senha } = formData;
    const data = new FormData();

    data.append('email', email);
    data.append('senha', senha);

    const response = await axios.post('/colaborador-login', data);
    const { senhaTemp } = response.data;

    if ((response.status = 200)) {
      if (senhaTemp === false) {
        return;
      } else if (senhaTemp === true) {
        return;
      }
    }
  }

  return (
    <>
      <Header />

      <h1 style={{ marginTop: '1.7em' }} className="text-center">
        Olá Colaborador, Faça o seu login!
      </h1>

      {console.log(erros)}
      {erros.msg === '' && erros.erro === '' ? '' : ''}
      {erros.msg === '' && validacao === 2 ? (
        ''
      ) : (
        <div className="alert alert-success">
          Atividade Registrada com Sucesso! {erros.msg}
        </div>
      )}
      {erros.erro === '' || validacao == 1 ? (
        ''
      ) : (
        <div className="alert alert-danger">{erros.erro}</div>
      )}

      <ContainerApp className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              onChange={handleInputChange}
              id="pass"
              className="form-control"
            />
          </div>
          <div className="opt">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
            <Link to="/auth-aluno-recuperasenha">Esqueci minha Senha</Link>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
