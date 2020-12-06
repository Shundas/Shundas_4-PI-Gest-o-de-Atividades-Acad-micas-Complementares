import React from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { MdFace } from 'react-icons/md';
import { Background, HeaderContainerWrapper } from './styled';
import logo from '../../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

export default function HeaderAdmin() {
  return (
    <>
      <HeaderContainerWrapper>
        <nav className="navbar navbar-expand-md navbar-success bg-success menu">
          <div className="div-flex">
            <Background src={logo} className="img-fluid" alt="Imagem da Logo" />
            <h5
              style={{
                color: '#fff',
                marginLeft: '10px',
                marginTop: '8px',
              }}
            >
              Atividades Complementares
            </h5>
          </div>

          <div className="btns">
            <button
              type="button"
              className="btn btn-success wrap"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <span>Clique para ver perfil ou logout</span>
              <FiUser size={30} />
            </button>
          </div>
        </nav>
      </HeaderContainerWrapper>

      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Escolha a opção desejada.
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
              className="modal-body"
            >
              <button className="btn btn-primary">
                <MdFace size={20} style={{ marginRight: '6px' }} />
                Ver Perfil
              </button>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                className="btn btn-danger"
              >
                <FiLogOut style={{ marginRight: '6px' }} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
