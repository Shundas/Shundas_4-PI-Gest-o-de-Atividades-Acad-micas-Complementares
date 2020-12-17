import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../components/HeaderLogin';

const Container = styled.div`
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
`;

export default function ResetSenhaAluno() {
  const [novaSenha, setNovaSenha] = React.useState('');
  const [confirmaSenha, setConfirmaSenha] = React.useState('');

  const [msgConfirm, setMsgConfirm] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [erros, setErros] = React.useState('');
  const history = useHistory();

  function historyReturn(path) {
    return history.push(`/${path}`);
  }

  const data = {
    novaSenha,
    confirmaSenha,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const iduser = localStorage.getItem('iduser');
    console.log(iduser);

    try {
      const response = await axios.post(`/novaSenhaColab/${iduser}`, data);
      if ((response.status = 200)) {
        setTimeout(
          () => {
            setMsgConfirm('Senha atualizada com sucesso!');
            setConfirm(true);
          },
          setTimeout(() => {
            setConfirm(false);
          }, 4000)
        );
      }
    } catch (error) {
      if ((error.status = 400)) {
        setTimeout(
          () => {
            setErros('Senhas não Conferem');
            setToggle(true);
          },
          setTimeout(() => {
            setToggle(false);
          }, 4000)
        );
      }
    }
  }

  return (
    <>
      <Header />

      <h1 style={{ marginTop: '1.7em' }} className="text-center">
        Digite uma nova senha!
      </h1>

      {!toggle && ''}
      {toggle && (
        <div className="container">
          <div style={{ textAlign: 'center' }} className="alert alert-danger">
            {erros}
          </div>
        </div>
      )}

      {!confirm && ''}
      {confirm && (
        <div className="container">
          <div style={{ textAlign: 'center' }} className="alert alert-success">
            {msgConfirm}
          </div>
        </div>
      )}

      <Container className="container">
        <form>
          <div className="form-group">
            <label htmlFor="new-senha">Nova Senha</label>
            <input type="text" id="new-senha" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-senha">Confirmar Senha</label>
            <input type="text" id="confirm-senha" className="form-control" />
          </div>
          <button className="btn btn-primary">Salvar</button>
        </form>
      </Container>
    </>
  );
}
