import React from 'react';
import { MdSearch } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.css';

export default function CardsAdmin() {
  return (
    <div className="container">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Criar Usuário</h5>
          <MdSearch size={25} color="blue" className="icon" />
        </div>
      </div>
    </div>
  );
}
