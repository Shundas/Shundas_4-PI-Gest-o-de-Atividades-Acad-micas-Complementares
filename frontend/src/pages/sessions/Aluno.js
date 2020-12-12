import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const [showalerterror, setShowAlertError] = React.useState(false);
  const [showalertsuccess, setShowAlertSuccess] = React.useState(false);
  const history = useHistory();

  const historyReturn = () => {
    return history.push('/aluno-home');
  };

  const handleSubmit = React.useCallback(async e => {
    e.preventDefault();

    const data = {
      email: email,
      senha: senha,
    };

    if (data.email === '' || data.senha === '') {
      return setTimeout(
        () => {
          setShowAlertError(true);
        },
        setTimeout(() => setShowAlertError(false), 4000)
      );
    } else {
      await axios.post('/aluno-login', {
        email,
        senha,
      });
      return historyReturn();
    }
  });

  return (
    <>
      <Header />

      <h1 style={{ marginTop: '1.7em' }} className="text-center">
        Acesso Aluno!
      </h1>

      <div className="container">
        {!showalerterror && ''}
        {showalerterror && (
          <div
            style={{ textAlign: 'center' }}
            class="alert alert-danger"
            role="alert"
          >
            Email e Senha são obrigatórios!
          </div>
        )}
      </div>

      <ContainerApp className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="form-control"
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div className="opt">
            <button className="btn btn-primary">Entrar</button>
            <Link to="/auth-aluno-recuperasenha">Esqueci minha Senha</Link>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
