import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const Container = styled.div``;

export default function ResetSenhaAluno() {
  return (
    <>
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
