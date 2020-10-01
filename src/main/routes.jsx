import React from "react";
import {Router, Route, Redirect, hashHistory} from "react-router";

import Cliente from "../pages/cliente/cliente";
import Tarefas from "../pages/tarefas/tarefas";
import Relatorio from "../pages/relatorio/relatorio";
// import ClienteTarefas from "../clienteTarefas/index";

const ClienteTarefas = (props) => {
  const {id} = props.params;

  return <h1>{`Cliente ${id} - Tarefas`}</h1>;
};

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/clientes" component={Cliente} />
    <Route path="/relatorio" component={Relatorio} />
    <Route path="/clientes/:id" component={ClienteTarefas} />
    <Route path="/tarefas/:id" component={Tarefas} />
    <Redirect from="*" to="/clientes" />
  </Router>
);
 