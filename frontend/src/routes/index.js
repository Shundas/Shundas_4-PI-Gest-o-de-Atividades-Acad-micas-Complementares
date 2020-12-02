import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminHome from '../pages/Admin/AdminHome';
import AdminTipoUser from '../pages/Admin/AdminTipoUser';
import AdminCadastroAluno from '../pages/Admin/AdminCadastroAluno';
import AdminCadastroColaborador from '../pages/Admin/AdminCadastroColab';
import AdminConsulta from '../pages/Admin/AdminConsulta';
import AdminTipConsulta from '../pages/Admin/AdminTipoCosulta';
import AdminConsultaColborador from '../pages/Admin/AdminConsultaColaborador';

import AlunoEvento from '../pages/Aluno/AlunoEvento';

import ColaboradorHome from '../pages/Colaborador/ColaboradorPerfil';

export default function RoutesAplication() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AdminHome} />
        <Route path="/question" component={AdminTipoUser} />
        <Route path="/aluno" component={AdminCadastroAluno} />
        <Route path="/colaborador" component={AdminCadastroColaborador} />
        <Route path="/question-consult" component={AdminTipConsulta} />
        <Route path="/consultaluno" component={AdminConsulta} />
        <Route path="/consultcolaborador" component={AdminConsultaColborador} />
        <Route path="/atividade" component={AlunoEvento} />
        <Route path="/colaboradorhome" component={ColaboradorHome} />
      </Switch>
    </BrowserRouter>
  );
}
