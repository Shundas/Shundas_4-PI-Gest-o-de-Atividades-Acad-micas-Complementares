import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import api from '../../../services/api';
import styled from 'styled-components';
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
        return alert('Todos os campos devem ser preenchidos!');
      }

      await api.post('/criarAluno', {
        name,
        email,
        phone,
        celular,
        cpf,
      });
      alert('Aluno Cadastrado com sucesso!');
      historyReturn();
    },
    [name, email, phone, celular, cpf]
  );

  return (
    <>
      <Header />
      <h2 style={{ marginTop: '2em' }} className="text-center">
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
              <input
                className="form-control"
                type="text"
                id="telefone"
                onChange={e => setCpf(e.target.value)}
              />
              <label htmlFor="telefone">Telefone</label>
              <input
                className="form-control"
                type="text"
                id="telefone"
                onChange={e => setPhone(e.target.value)}
              />
              <label htmlFor="celular">Celular</label>
              <input
                className="form-control"
                type="text"
                id="celular"
                onChange={e => setCelular(e.target.value)}
              />
              {/* <label htmlFor="select">Curso</label>
              <select id="perfil" className="form-control" onChange={}>
                <option value="1">Analise e Desenvolvimento de Sistemas</option>
                <option value="2">Redes de Computadores</option>
                <option value="2">Jogos Digitais</option>
              </select>

              <label htmlFor="select">Turma</label>
              <select id="perfil" className="form-control">
                <option value="1">Turma</option>
                <option value="2">Redes de Computadores</option>
                <option value="2">Jogos Digitais</option>
              </select> */}
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
