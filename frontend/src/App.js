import React, { Fragment } from 'react';
import GlobalStyles from './Global/styled';
import Student from './pages/Admin/AdminCadastroAluno';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Student />
    </Fragment>
  );
}

export default App;
