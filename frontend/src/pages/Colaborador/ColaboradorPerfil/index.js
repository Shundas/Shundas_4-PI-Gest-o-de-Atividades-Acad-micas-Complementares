import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../../components/HeaderAdmin';

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.8em;

  border: 1px solid #fff;
  padding: 20px 10px;
  background-color: #fff;

  border-radius: 20px;
  box-shadow: -1px 1px 16px -13px rgba(0, 0, 0, 0.65);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2em;
  margin-bottom: 1em;
`;

export default function PageColaboradorPerfil() {
  return (
    <>
      <Header />

      <Title>Perfil</Title>

      <ContainerApp className="container">
        <form className="column">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <InputMask
              mask="999.999.999-99"
              className="form-control"
              maskPlaceholder="999.999.999-99"
              placeholder="Apenas Números"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">Nascimento</label>
            <input type="date" className="form-control" id="cpf" />
          </div>
          <div className="form-group">
            <label htmlFor="per">Perfil</label>
            <input type="text" className="form-control" id="per" />
          </div>
        </form>
      </ContainerApp>

      <Title>Contato</Title>

      <ContainerApp className="container">
        <form className="column">
          <div className="form-group">
            <label htmlFor="mail">E-mail</label>
            <input type="email" className="form-control" id="mail" />
          </div>
          <div className="form-group">
            <label htmlFor="fone">Telefone</label>
            <InputMask
              mask="(99)9999-9999"
              className="form-control"
              maskPlaceholder="(99)9999-9999"
              placeholder="(99)9999-9999"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cel">Celular</label>
            <InputMask
              mask="(99)99999-9999"
              className="form-control"
              maskPlaceholder="(99)99999-9999"
              placeholder="(99)99999-9999"
            />
          </div>
          <button className="btn btn-primary">Salvar</button>
        </form>
      </ContainerApp>

      <Title>Alteração de Senha</Title>

      <ContainerApp className="container">
        <form className="column">
          <div className="form-group">
            <label htmlFor="name">Senha Atual</label>
            <input type="password" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nova Senha</label>
            <input type="password" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Confirmar Senha</label>
            <input type="password" className="form-control" id="name" />
          </div>
          <button className="btn btn-primary">Salvar</button>
        </form>
      </ContainerApp>
    </>
  );
}
