import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4%;
  margin-top: 3em;
`;

export const Hero = styled.h1`
  text-align: center;
  margin-top: 8rem;
  font-family: 'Poppins', sans-serif;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;

export const ListChild = styled.li`
  border: 1px solid #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: -1px 1px 16px -9px rgba(0, 0, 0, 0.65);

  &:hover {
    animation: bounce 0.5s linear;
  }
  @keyframes bounce {
    20% {
      transform: translateY(-6px);
    }
    40% {
      transform: translateY(0px);
    }
    80% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Spnat = styled.span`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  padding-left: 0.7rem;
`;

export const ContainerHistory = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem 4%;

  .card {
    border: 1px solid #fff;
    border-radius: 6px;
    box-shadow: -1px 1px 16px -9px rgba(0, 0, 0, 0.65);
    margin-top: 1rem;

    &:hover {
      animation: bounce 0.5s linear;
    }
    @keyframes bounce {
      20% {
        transform: translateY(-6px);
      }
      40% {
        transform: translateY(0px);
      }
      80% {
        transform: translateY(-2px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const History = styled.h1`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;
