import styled from 'styled-components';

export const Container = styled.div`
  .raw {
    display: flex;
    flex-direction: column;
  }

  .drop-raw {
    display: flex;
  }

  .btn-salve {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      width: 500px;
      border-radius: 6px;
      margin-top: 9px;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;
