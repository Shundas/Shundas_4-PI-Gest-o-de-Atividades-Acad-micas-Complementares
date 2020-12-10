import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Image from '../../images/logo.svg';

const Footer = styled.footer``;

const ImageFooter = styled.img``;

export default function Footer() {
  return (
    <Footer>
      <div className="footer-in">
        <ImageFooter src={Image} alt="Imagem do Footer" />
      </div>
    </Footer>
  );
}
