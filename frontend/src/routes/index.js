import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Admin
import AdminHome from '../pages/Admin/AdminHome';
import AdminTipoUser from '../pages/Admin/AdminTipoUser';
import AdminCadastroAluno from '../pages/Admin/AdminCadastroAluno';
import AdminCadastroColaborador from '../pages/Admin/AdminCadastroColab';
import AdminConsulta from '../pages/Admin/AdminConsulta';
import AdminTipConsulta from '../pages/Admin/AdminTipoCosulta';
import AdminConsultaColborador from '../pages/Admin/AdminConsultaColaborador';

// Aluno
import AlunoEvento from '../pages/Aluno/AlunoEvento';
import AlunoEventoSenai from '../pages/Aluno/AlunoEventoSenai';
import AlunoPerfil from '../pages/Aluno/AlunoPerfil';
import AlunoHome from '../pages/Aluno/AlunoHome';
import AlunoConsultaAtividades from '../pages/Aluno/AlunoConsultaAtividades';
import AlunoVisualisarAtividades from '../pages/Aluno/AlunoVisualizarAtividade';

// Colaborador
import ColaboradorHome from '../pages/Colaborador/ColaboradorAdicionarAtividade';

// Login
import AlunoLogin from '../pages/sessions/Aluno';

export default function RoutesAplication() {
  return (
    <BrowserRouter>
      <Switch>
        /** Admin */
        <Route path="/" exact component={AdminHome} />
        <Route path="/question" component={AdminTipoUser} />
        <Route path="/aluno" component={AdminCadastroAluno} />
        <Route path="/colaborador" component={AdminCadastroColaborador} />
        <Route path="/question-consult" component={AdminTipConsulta} />
        <Route path="/consultaluno" component={AdminConsulta} />
        <Route path="/consultcolaborador" component={AdminConsultaColborador} />
        /**Aluno */
        <Route path="/atividade" component={AlunoEvento} />
        <Route path="/evento-senai" component={AlunoEventoSenai} />
        <Route path="/consulta-atividade" component={AlunoConsultaAtividades} />
        <Route
          path="/visualiza-atividade/:id"
          component={AlunoVisualisarAtividades}
        />
        <Route path="/aluno-perfil" component={AlunoPerfil} />
        <Route path="/aluno-home" component={AlunoHome} />
        /**Colaborador */
        <Route path="/colaboradorhome" component={ColaboradorHome} />
        /**Login */
        <Route path="/auth-aluno" component={AlunoLogin} />
      </Switch>
    </BrowserRouter>
  );
}
