import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4%;
  margin-top: 5em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  button {
    border: 0;
    outline: 0;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
