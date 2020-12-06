import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdMenu } from 'react-icons/md';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { MdFace, MdAccessTime } from 'react-icons/md';

import { Background, HeroTitle, HeaderWrapper } from './styled';

export default function Header({ image, text }) {
  return (
    <>
      <HeaderWrapper>
        <nav className="navbar navbar-expand-md navbar-success bg-success menu">
          <div className="flex">
            <Background src={image} alt={text} />
            <HeroTitle>Atividades Complementares</HeroTitle>
          </div>

          <button
            className="navbar-toggler btn"
            type="button"
            data-toggle="collapse"
            data-target="#menuCollapse"
            aria-controls="menuCollapse"
          >
            <MdMenu size={30} color="#fff" />
          </button>

          <div>
            <div
              className="collapse navbar-collapse col-cg-ritgh"
              id="menuCollapse"
            >
              <button
                type="button"
                class="btn btn-success wrap"
                data-toggle="modal"
                data-target="#ModalLong"
              >
                <span>Clique para ver suas horas validadas</span>
                <MdAccessTime size={30} />
              </button>

              <button
                type="button"
                class="btn btn-success wrap"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                <span>Clique para ver perfil ou logout</span>
                <FiUser size={30} />
              </button>
            </div>
          </div>
        </nav>
      </HeaderWrapper>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
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

      <div
        class="modal fade"
        id="ModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Suas Horas Validadas
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  Ensino:
                  <h5 className="badge badge-ligth">15h</h5>
                </li>
                <li className="nav-item">
                  Pesquisa:
                  <h5 className="badge badge-ligth">15h</h5>
                </li>
                <li className="nav-item">
                  Extencao:
                  <h5 className="badge badge-ligth">25h</h5>
                </li>
                <hr />
                <li className="nav-item">
                  Total:
                  <h5 class="badge badge-ligth">55h</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
