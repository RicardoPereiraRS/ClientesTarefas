import React from "react";
import {Router, Route, Redirect, hashHistory} from "react-router";

import Cliente from "../pages/cliente/cliente";
import Tarefas from "../pages/tarefas/tarefas";
import Relatorio from "../pages/relatorio/relatorio";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/clientes" component={Cliente} />
    <Route path="/relatorio" component={Relatorio} />
    <Route path="/tarefas/:id" component={Tarefas} />
    <Redirect from="*" to="/clientes" />
  </Router>
);
