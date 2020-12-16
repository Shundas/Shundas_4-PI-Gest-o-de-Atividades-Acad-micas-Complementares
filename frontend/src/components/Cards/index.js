import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="container">
        <Hero>Página Inicial</Hero>
        <Container className="container">
          <List>

            <Link
              className="tolink"
              to="/senai-atividade"
            >
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Adicionar Certificado</h5>
                  <FaPlus size={25} color="blue" className="icon" />
                </div>
              </div>
            </Link>

            <Link
              className="tolink"
              to="/consulta-atividade"
            >
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Consultar Atividades</h5>
                  <MdSearch size={25} color="blue" className="icon" />
                </div>
              </div>
            </Link>
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Consultar Regras</h5>
                  <MdContentPaste size={25} color="blue" className="icon" />
                </div>
              </div>

              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Fale Conosco</h5>
                  <FaFacebookMessenger size={25} color="blue" className="icon" />
                </div>
              </div>
          </List>
        </Container>
          <ContainerHistory>
            <History>Criados Recentemente</History>
            <Grid className="container">
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
      </div>
    </>
  );
}
