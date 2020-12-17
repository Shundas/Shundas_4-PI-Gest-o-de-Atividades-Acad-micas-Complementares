import React, { Fragment, useCallback, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .btns {
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

export default function AdminCadastroColab() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [celular, setCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [selectRole, setSelectRole] = useState('0');

  const [showalerterror, setShowAlertError] = React.useState(false);
  const [showalertsuccess, setShowAlertSuccess] = React.useState(false);

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function getPerfisRoles() {
      await api.get('/perfis').then(response => {
        setRoles(response.data);
      });
    }
    getPerfisRoles();
  }, []);

  const history = useHistory();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      console.log(selectRole);

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
          setTimeout(() => setShowAlertError(false), 4000)
        );
      } else {
        await api.post('/criarColaborador', {
          name,
          email,
          phone,
          celular,
          cpf,
          idrole: selectRole,
        });
      }

      return setTimeout(
        () => {
          setShowAlertSuccess(true);
        },
        setTimeout(() => {
          setShowAlertSuccess(false);
        }, 4000)
      );
    },
    [name, email, phone, celular, cpf, selectRole]
  );

  return (
    <Fragment>
      <Header />
      <h2 style={{ marginTop: '2em' }} className="text-center">
        Cadastro de Colaborador
      </h2>

      <Nopit>
        <Link to="/question" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <div className="container">
        {!showalerterror && ''}
        {showalerterror && (
          <div
            style={{ textAlign: 'center' }}
            class="alert alert-danger"
            role="alert"
          >
            Alguns campos são obrigatórios, verifique se todos estão
            preenchidos!
          </div>
        )}

        {!showalertsuccess && ''}
        {showalertsuccess && (
          <div
            style={{ textAlign: 'center' }}
            class="alert alert-success"
            role="alert"
          >
            Aluno Cadastrado com Sucesso!
          </div>
        )}

        <Container>
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
              <label htmlFor="telefone">Telefone</label>
              <InputMask
                className="form-control"
                mask="(99)9999-9999"
                placeholder="(99)9999-9999"
                type="text"
                id="telefone"
                onChange={e => setPhone(e.target.value)}
              />
              <label htmlFor="celular">Celular</label>
              <InputMask
                className="form-control"
                mask="(99)99999-9999"
                placeholder="(99)99999-9999"
                type="text"
                id="celular"
                onChange={e => setCelular(e.target.value)}
              />

              <label htmlFor="celular">CPF</label>
              <InputMask
                className="form-control"
                mask="999.999.999-99"
                placeholder="Digite apenas números"
                type="text"
                id="cpf"
                onChange={e => setCpf(e.target.value)}
              />

              <label htmlFor="profile">Perfil</label>

              <select
                className="form-control"
                id="profile"
                onChange={e => setSelectRole(e.target.value)}
              >
                <option value="0">Selecione</option>
                {roles.map(role => (
                  <option key={role.idrole} value={role.idrole}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="btns">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </Container>
      </div>
    </Fragment>
  );
}
