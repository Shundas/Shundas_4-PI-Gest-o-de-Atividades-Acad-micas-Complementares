import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdMenu } from 'react-icons/md';
import { FiPower, FiUser } from 'react-icons/fi';

import { Background, HeaderWrapper } from './styled';

export default function Header({
  image,
  text,
  extencao,
  pesquisa,
  ensino,
  total,
}) {
  return (
    <HeaderWrapper>
      <nav className="navbar navbar-expand-md navbar-success fixed-top bg-success menu">
        <Background src={image} alt={text} />

        <button
          class="navbar-toggler btn"
          type="button"
          data-toggle="collapse"
          data-target="#menuCollapse"
          aria-controls="menuCollapse"
        >
          <MdMenu size={30} color="#fff" />
        </button>

        <div class="collapse navbar-collapse" id="menuCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <button
                type="button"
                class="btn btn-lg btn-secondary"
                data-toggle="popover"
                title={`Você possui 40h validadas nesta modalidade`}
                data-content=""
              >
                {ensino}
              </button>
            </li>
            <li class="nav-item">
              <button
                type="button"
                class="btn btn-lg btn-secondary"
                data-toggle="popover"
                title={`Você possui 45h validadas nesta modalidade`}
                data-content=""
              >
                {pesquisa}
              </button>
            </li>
            <li class="nav-item">
              <button
                type="button"
                class="btn btn-lg btn-secondary"
                data-toggle="popover"
                title={`Você possui 60h validadas nesta modalidade`}
                data-content=""
              >
                {extencao}
              </button>
            </li>

            <li class="nav-item">
              <button
                type="button"
                class="btn btn-lg btn-warning war"
                data-toggle="popover"
                title={`Você possui 60h validadas nesta modalidade`}
                data-content=""
              >
                {total}
              </button>
            </li>
          </ul>

          <ul class="nav justify-content-end">
            <li class="nav-item">
              <button type="button" class="btn btn-success" id="btnLogin">
                <FiUser size={20} />
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-success" id="btnLogin">
                <FiPower size={20} color="#e12" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderWrapper>
  );
}
