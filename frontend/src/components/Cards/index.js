import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdSearch, MdContentPaste } from 'react-icons/md';
import { FaPlus, FaFacebookMessenger } from 'react-icons/fa';
import {
  Container,
  List,
  ListChild,
  ContainerHistory,
  Spnat,
  Hero,
  History,
  Grid,
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
      </Container>
      <ContainerHistory>
        <History>Criados Recentemente</History>
        <Grid>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Curso de Inglês</h5>
              <h6 className="card-subtitle mb-2 text-muted">4h</h6>
              <p className="card-text">Status: Em andamento</p>
              <p className="card-text">Responsável: Shundas Cleysso</p>
              <a href="#" className="card-link">
                Visualizar
              </a>
              <a href="#" className="card-link">
                Comentário
              </a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Curso de Inglês</h5>
              <h6 className="card-subtitle mb-2 text-muted">4h</h6>
              <p className="card-text">Status: Em andamento</p>
              <p className="card-text">Responsável: Shundas Cleysso</p>
              <a href="#" className="card-link">
                Visualizar
              </a>
              <a href="#" className="card-link">
                Comentário
              </a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Curso de Inglês</h5>
              <h6 className="card-subtitle mb-2 text-muted">4h</h6>
              <p className="card-text">Status: Em andamento</p>
              <p className="card-text">Responsável: Shundas Cleysso</p>
              <a href="#" className="card-link">
                Visualizar
              </a>
              <a href="#" className="card-link">
                Comentário
              </a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Curso de Inglês</h5>
              <h6 className="card-subtitle mb-2 text-muted">4h</h6>
              <p className="card-text">Status: Em andamento</p>
              <p className="card-text">Responsável: Shundas Cleysso</p>
              <a href="#" className="card-link">
                Visualizar
              </a>
              <a href="#" className="card-link">
                Comentário
              </a>
            </div>
          </div>
        </Grid>
      </ContainerHistory>
    </>
  );
}
