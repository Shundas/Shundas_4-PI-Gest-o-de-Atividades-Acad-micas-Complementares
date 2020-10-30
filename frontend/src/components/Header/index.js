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
      <nav className="navbar navbar-expand-md navbar-success bg-success menu">
        <Background src={image} alt={text} />

        <button
          className="navbar-toggler btn"
          type="button"
          data-toggle="collapse"
          data-target="#menuCollapse"
          aria-controls="menuCollapse"
        >
          <MdMenu size={30} color="#fff" />
        </button>

        <div className="collapse navbar-collapse" id="menuCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title={`Você tem 40h validadas nessa modalidade`}
              >
                {ensino}
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title={`Você tem 40h validadas nessa modalidade`}
              >
                {pesquisa}
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title={`Você tem 40h validadas nessa modalidade`}
              >
                {extencao}
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title={`Você tem 40h validadas nessa modalidade`}
              >
                {total}
              </button>
            </li>
          </ul>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <button type="button" className="btn btn-success" id="btnLogin">
                <FiUser size={20} />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-success" id="btnLogin">
                <FiPower size={20} color="#e12" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderWrapper>
  );
}
