import React from "react";
import {Router, Route, Redirect, hashHistory} from "react-router";

import Cliente from "../pages/cliente/cliente";
import Tarefas from "../pages/tarefas/tarefas";
// import ClienteTarefas from "../clienteTarefas/index";
import About from "../about/about";

const ClienteTarefas = (props) => {
  const {id} = props.params;

  return <h1>{`Cliente ${id} - Tarefas`}</h1>;
};

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/clientes" component={Cliente} />
    <Route path="/clientes/:id" component={ClienteTarefas} />
    <Route path="/tarefas/:id" component={Tarefas} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/clientes" />
  </Router>
);
