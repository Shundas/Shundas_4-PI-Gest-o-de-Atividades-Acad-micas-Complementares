import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Background, HeaderContainerWrapper, Title } from './styled';
import logo from '../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

export default function HeaderAdmin() {
  return (
    <HeaderContainerWrapper>
      <nav className="navbar navbar-expand-md navbar-success bg-success menu">
        <div className="div-flex">
          <Background src={logo} className="img-fluid" alt="Imagem da Logo" />
          <Title>Atividades Complementares</Title>
        </div>

        <div className="btns">
          <button className="btn btn-success">
            <FiUser size={25} />
          </button>
        </div>
      </nav>
    </HeaderContainerWrapper>
  );
}
