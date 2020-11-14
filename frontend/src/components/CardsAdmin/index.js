import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FiPlus, FiUser, FiUserPlus } from 'react-icons/fi';
import { Container, Grid } from './styled';
import 'bootstrap/dist/css/bootstrap.css';

export default function CardsAdmin() {
  return (
    <Container>
      <div>
        <Grid>
          <div className="card" style={{ width: '18rem' }}>
            <button>
              <div className="card-body">
                <h5 className="card-title">Criar Usuário</h5>
                <FiPlus size={25} color="blue" className="icon" />
              </div>
            </button>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <button>
              <div className="card-body">
                <h5 className="card-title">Consultar Usuários</h5>
                <MdSearch size={25} color="blue" className="icon" />
              </div>
            </button>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <button>
              <div className="card-body">
                <h5 className="card-title">Perfis de Usuário</h5>
                <FiUser size={25} color="blue" className="icon" />
              </div>
            </button>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <button>
              <div className="card-body">
                <h5 className="card-title">Novo Perfil de Usuário</h5>
                <FiUserPlus size={25} color="blue" className="icon" />
              </div>
            </button>
          </div>
        </Grid>
      </div>
    </Container>
  );
}
