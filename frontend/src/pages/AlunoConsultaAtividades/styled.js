import styled from 'styled-components';

export const Text = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  .ctx {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (max-width: 1125px) {
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 6px;
  }
`;
