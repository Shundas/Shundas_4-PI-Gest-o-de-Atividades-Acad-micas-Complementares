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
  const [showalerterror, setShowAlertError] = React.useState(false);
  const [showalertsuccess, setShowAlertSuccess] = React.useState(false);
  const history = useHistory();

  const historyReturn = () => {
    return history.push('/');
  };

  const handleSubmit = React.useCallback(
    async e => {
      e.preventDefault();

      if (email === '') {
        return setTimeout(
          () => {
            setShowAlertError(true);
          },
          setTimeout(() => setShowAlertError(false), 4000)
        );
      } else {
        await axios.post('/aluno-login', { email });

        return setTimeout(
          () => {
            setShowAlertSuccess(true);
          },
          setTimeout(() => {
            setShowAlertSuccess(false);
            historyReturn();
          }, 4000)
        );
      }
    },
    [email]
  );

  return (
    <>
      <Header />

      <h1 style={{ marginTop: '1.7em' }} className="text-center">
        Insira o seu e-mail para redefinição da sua senha!
      </h1>

      <div className="container">
        {!showalerterror && ''}
        {showalerterror && (
          <div
            style={{ textAlign: 'center' }}
            class="alert alert-danger"
            role="alert"
          >
            É necessário inserir o email para redefinição de senha!
          </div>
        )}

        {!showalertsuccess && ''}
        {showalertsuccess && (
          <div
            style={{ textAlign: 'center' }}
            class="alert alert-success"
            role="alert"
          >
            Email enviado com sucesso!
          </div>
        )}
      </div>

      <ContainerApp className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="opt">
            <button className="btn btn-primary">Enviar</button>
            <Link to="/auth-aluno">Voltar</Link>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
