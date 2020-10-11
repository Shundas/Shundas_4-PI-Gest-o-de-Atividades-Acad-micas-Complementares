import React from 'react';
import { FiPlus } from 'react-icons/fi';
import {
  Container,
  List,
  ListChild,
  ContainerList,
  ContainerHistory,
} from './styled';

export default function Cards() {
  return (
    <Container>
      <ContainerList>
        <List>
          <ListChild>
            <FiPlus />
            <span>Adicionar Certificado</span>
          </ListChild>

          <ListChild>
            <FiPlus />
          </ListChild>

          <ListChild>
            <FiPlus />
            <span>Fale Conosco</span>
          </ListChild>

          <ListChild>
            <FiPlus />
          </ListChild>
        </List>
      </ContainerList>
      <ContainerHistory>
        <h1>History</h1>
      </ContainerHistory>
    </Container>
  );
}
