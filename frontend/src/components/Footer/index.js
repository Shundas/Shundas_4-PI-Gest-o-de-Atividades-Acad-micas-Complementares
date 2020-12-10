import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Image from '../../images/logo.svg';

const Footer = styled.nav`
  width: 100%;
  bottom: 0;
`;

const ImageFooter = styled.img``;

export default function FooterPage() {
  return (
    <Footer className="navbar navbar-success bg-success">
      <ImageFooter src={Image} alt="Imagem do Footer" />

      <h4 style={{ color: '#fff' }}>Feito com {':)'} por Shundas</h4>
    </Footer>
  );
}
