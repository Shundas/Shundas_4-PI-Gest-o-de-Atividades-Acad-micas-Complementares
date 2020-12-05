import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdMenu } from 'react-icons/md';
import { FiPower, FiUser } from 'react-icons/fi';

import { Background, HeroTitle, HeaderWrapper } from './styled';

export default function Header({
  image,
  text,
  extencao,
  pesquisa,
  ensino,
  total,
  title,
}) {
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
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <span style={{ color: '#fff' }} className="nav-link">
                    {ensino}
                    <h5 className="badge badge-ligth">40h</h5>
                  </span>
                </li>
                <li className="nav-item">
                  <span style={{ color: '#fff' }} className="nav-link">
                    {pesquisa}
                    <h5 className="badge badge-ligth">40h</h5>
                  </span>
                </li>
                <li className="nav-item">
                  <span style={{ color: '#fff' }} className="nav-link">
                    {extencao}
                    <h5 className="badge badge-ligth">40h</h5>
                  </span>
                </li>
                <li className="nav-item">
                  <span style={{ color: '#fff' }} className="nav-link">
                    {total}
                    <h5 class="badge badge-ligth">40h</h5>
                  </span>
                </li>
              </ul>
              <button className="btn btn-success">
                <FiUser size={25} />
              </button>
            </div>
          </div>
        </nav>
      </HeaderWrapper>
    </>
  );
}
