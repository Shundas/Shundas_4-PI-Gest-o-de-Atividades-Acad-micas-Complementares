import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const ContainerApp = styled.div``;

export default function PageSessionAluno() {
  return (
    <ContainerApp className="container">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </ContainerApp>
  );
}
