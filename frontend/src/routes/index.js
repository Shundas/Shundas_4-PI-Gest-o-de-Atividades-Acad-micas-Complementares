import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminHome from '../pages/Admin/AdminHome';
import AdminTipoUser from '../pages/Admin/AdminTipoUser';
import AdminCadastroAluno from '../pages/Admin/AdminCadastroAluno';
import AdminCadastroColaborador from '../pages/Admin/AdminCadastroColab';

export default function RoutesAplication() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AdminHome} />
        <Route path="/question" component={AdminTipoUser} />
        <Route path="/aluno" component={AdminCadastroAluno} />
        <Route path="/colaborador" component={AdminCadastroColaborador} />
      </Switch>
    </BrowserRouter>
  );
}
