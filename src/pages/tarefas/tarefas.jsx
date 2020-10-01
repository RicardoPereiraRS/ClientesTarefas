import React from "react";

import Menu from "../../template/menu";
import PageHeader from "../../template/pageHeader";
import TarefasForm from "./tarefasForm";
import TarefasList from "./tarefasList";

function getNome(props) {
  const query = new URLSearchParams(props.location.search);
  return query.get("nome");
}

export default (props) => {
  const {id} = props.params;

  return (
    <div>
      <Menu />
      <PageHeader name={`Tarefas ${getNome(props)}`}></PageHeader>
      <TarefasForm clienteId={id} />
      <TarefasList />
    </div>
  );
};
