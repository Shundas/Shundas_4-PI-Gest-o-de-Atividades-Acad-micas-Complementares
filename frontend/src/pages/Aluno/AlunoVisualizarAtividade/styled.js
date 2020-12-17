import styled from 'styled-components';

export const Text = styled.h1``;

export const SubText = styled.h4``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .ctx-raw {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-row {
    margin-bottom: 1rem;
  }
`;

export const Nopit = styled.div`
  position: absolute;
  border: 0;
  top: 90px;
  left: 30px;
  width: 38px;
  height: 38px;
  background: #28a745 !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
`;
