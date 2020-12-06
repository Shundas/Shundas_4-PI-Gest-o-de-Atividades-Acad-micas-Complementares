import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import api from '../../../services/api';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
  }
  .btns button:nth-child(1) {
    margin-bottom: 1rem;
  }
  input {
    width: 530px;
  }
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

export default function AdminCadastroUser() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  const [showalerterror, setShowAlertError] = React.useState(false);
  const [error, setError] = React.useState({
    err: '',
  });

  const history = useHistory();

  const historyReturn = () => {
    return history.push('/');
  };

  const handleSubmit = React.useCallback(
    async e => {
      e.preventDefault();

      if (
        name === '' ||
        email === '' ||
        phone === '' ||
        celular === '' ||
        cpf === ''
      ) {
        return setTimeout(
          () => {
            setShowAlertError(true);
          },
          setTimeout(() => setShowAlertError(false), 3000)
        );
      } else {
        await api
          .post('/criarAluno', {
            name,
            email,
            phone,
            celular,
            cpf,
          })
          .then(response => {
            setError(response.data);
          });
      }

      historyReturn();
    },
    [name, email, phone, celular, cpf]
  );

  return (
    <>
      <Header />

      {!showalerterror && ''}
      {showalerterror && (
        <div
          style={{ textAlign: 'center' }}
          class="alert alert-danger"
          role="alert"
        >
          {error.err}
        </div>
      )}

      <h2
        style={{ marginTop: '2em', marginBottom: '1em' }}
        className="text-center"
      >
        Cadastro de Usuário
      </h2>

      <Nopit>
        <Link to="/question" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <Container>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                className="form-control"
                type="text"
                id="name"
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="email">E-mail</label>
              <input
                className="form-control"
                type="email"
                id="email"
                onChange={e => setEmail(e.target.value)}
              />

              <label htmlFor="telefone">CPF</label>
              <InputMask
                mask="999.999.999-99"
                className="form-control"
                maskPlaceholder="999.999.999-99"
                placeholder="Digite apenas números"
                onChange={e => setCpf(e.target.value)}
              />

              <label htmlFor="fone">Telefone</label>
              <InputMask
                mask="(99)9999-9999"
                className="form-control"
                maskPlaceholder="(99)9999-9999"
                placeholder="(99)9999-9999"
                id="telefone"
                onChange={e => setPhone(e.target.value)}
              />

              <label htmlFor="cel">Celular</label>
              <InputMask
                mask="(99)99999-9999"
                className="form-control"
                maskPlaceholder="(99)99999-9999"
                placeholder="(99)99999-9999"
                id="celular"
                onChange={e => setCelular(e.target.value)}
              />
            </div>
            <div className="btns">
              <button className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
