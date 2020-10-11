import React from 'react';
import { MdSearch, MdContentPaste } from 'react-icons/md';
import { FaPlus, FaFacebookMessenger } from 'react-icons/fa';
import {
  Container,
  List,
  ListChild,
  ContainerHistory,
  Spnat,
  Hero,
} from './styled';

export default function Cards() {
  return (
    <>
      <Hero>Página Inicial</Hero>
      <Container>
        <List>
          <ListChild>
            <FaPlus size={25} color="blue" />
            <Spnat>Adicionar Certificado</Spnat>
          </ListChild>

          <ListChild>
            <MdSearch size={25} color="blue" />
            <Spnat>Consultar Atividades</Spnat>
          </ListChild>

          <ListChild>
            <MdContentPaste size={25} color="blue" />
            <Spnat>Consultar Regras</Spnat>
          </ListChild>

          <ListChild>
            <FaFacebookMessenger size={25} color="blue" />
            <Spnat>Fale Conosco</Spnat>
          </ListChild>
        </List>
        <ContainerHistory>
          <h1>History</h1>
        </ContainerHistory>
      </Container>
    </>
  );
}
