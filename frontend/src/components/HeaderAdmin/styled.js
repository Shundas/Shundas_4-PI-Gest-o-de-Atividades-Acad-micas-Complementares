import styled from 'styled-components';

export const HeaderContainerWrapper = styled.header`
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;

    .div-flex {
      width: 100%;
      display: flex;
      align-items: center;
    }
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
`;

export const Background = styled.img`
  display: block;
  max-width: 208px;
`;

export const Title = styled.h5`
  margin-left: 8px;
  display: flex;
`;
