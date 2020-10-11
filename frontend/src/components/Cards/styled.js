import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 4%;
  margin-top: 4rem;
`;

export const ContainerList = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 4rem auto;
  padding: 12px 4%;
`;

export const ListChild = styled.li`
  border: 1px solid #e11;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const ContainerHistory = styled.div``;
