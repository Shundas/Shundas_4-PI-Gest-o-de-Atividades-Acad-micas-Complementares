import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminHome from '../pages/Admin/AdminHome';

export default function RoutesAplication() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AdminHome} />
      </Switch>
    </BrowserRouter>
  );
}
