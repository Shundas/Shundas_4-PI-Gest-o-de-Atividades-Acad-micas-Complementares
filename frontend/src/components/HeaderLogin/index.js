import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import logo from '../../images/logo.svg';

const Wrapper = styled.header`
  nav {
    padding: 20px 20px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;

    h4 {
      margin-left: 10px;
    }
  }
`;

const Image = styled.img`
  max-width: 230px;
`;

export default function HeaderLogin() {
  return (
    <Wrapper>
      <nav className="navbar navbar-nav navbar-success bg-success">
        <div>
          <Image src={logo} alt="Imagem da Logo" />
          <h4 style={{ color: '#fff' }}>Atividades Complementares</h4>
        </div>
      </nav>
    </Wrapper>
  );
}
