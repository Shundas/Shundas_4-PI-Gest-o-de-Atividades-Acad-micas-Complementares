import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #eeeeee;
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(4, 160, 22);
    border-radius: 1.5rem;
  }
`;
