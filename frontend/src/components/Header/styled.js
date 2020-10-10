import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  .menu {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    border: 0;
    outline: none;
    background: none;
    font-size: 1rem;
  }

  .d-sp {
    background: #fff;
  }

  #menuCollapse {
    margin-left: 2rem;
  }

  .cont-btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .war {
    color: yellow;
  }
`;

export const Background = styled.img`
  max-width: 208px;
`;

export const HeroTitle = styled.h5`
  font-size: 1.4rem;
  margin-left: 1rem;
`;
