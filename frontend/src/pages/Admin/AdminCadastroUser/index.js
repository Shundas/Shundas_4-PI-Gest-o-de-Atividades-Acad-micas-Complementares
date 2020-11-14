import React, { Fragment } from 'react';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';

export default function AdminCadastroUser() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h2 style={{ marginTop: '2em' }} className="text-center">
          Cadastro de Usuário
        </h2>

        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input className="form-control" type="text" id="name" />
              <label htmlFor="name">E-mail</label>
              <input className="form-control" type="email" id="name" />
              <label htmlFor="name">Telefone</label>
              <input className="form-control" type="text" id="name" />
              <label htmlFor="name">Celular</label>
              <input className="form-control" type="text" id="name" />
              <label htmlFor="select">Tipo de Usuário</label>
              <select id="select" className="form-control">
                <option value="1">Aluno</option>
                <option value="2">Colaborador</option>
              </select>
            </div>
            <button className="btn btn-primary">Enviar</button>
            <button className="btn btn-secondary">Voltar</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
