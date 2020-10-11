import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 4em auto;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

export const Pergunta = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  padding: 0.9rem 3.8rem;
  border: 0;
  border-radius: 1rem;
  background: #e11;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  outline: none;
`;

export const ButtonSim = styled.button`
  padding: 0.9rem 3.8rem;
  border: none;
  border-radius: 1rem;
  background: #1199dd;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  outline: 0;
`;
