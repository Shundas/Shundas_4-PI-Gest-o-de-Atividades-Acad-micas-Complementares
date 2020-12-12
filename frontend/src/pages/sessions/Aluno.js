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
  const [senhaTemp, setSenhaTemp] = React.useState('');

  const [erros, setErros] = React.useState({
    msg: '',
    erro: '',
  });
  const history = useHistory();

  const validacao = Object.entries(erros).length;

  const historyReturn = () => {
    return history.push('/aluno-home');
  };

  const handleSubmit = React.useCallback(
    async e => {
      e.preventDefault();

      await axios.post('/aluno-login', { email, senha }).then(response => {
        setErros(response.data.error);
      });
      historyReturn();
    },
    [email, senha]
  );

  return (
    <>
      <Header />

      <h1 style={{ marginTop: '1.7em' }} className="text-center">
        Acesso Aluno!
      </h1>

      {console.log(erros.msg)}
      {/* {erros.msg === '' && erros.erro === '' ? '' : ''}
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
      )} */}

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
