import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px 10px;

    .flex {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .wrap {
      display: flex;
      align-items: center;
    }

    .btn span {
      display: none;
    }

    .btn:hover {
      span {
        display: flex;
      }
    }
  }

  span h5 {
    color: '#fff';
  }
`;

export const Background = styled.img`
  max-width: 208px;
`;

export const HeroTitle = styled.h5`
  font-size: 1.4rem;
  margin-left: 1rem;
  color: #fff;
`;
