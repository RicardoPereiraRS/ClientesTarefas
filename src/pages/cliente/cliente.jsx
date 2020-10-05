import React from "react";
import Menu from "../../components/menu";
import PageHeader from "../../components/pageHeader";
import ClienteForm from "./clienteForm";
import ClienteList from "./clienteList";

export default (props) => (
  <div>
    <Menu />
    <PageHeader name="Clientes" small="Cadastro"></PageHeader>
    <ClienteForm />
    <ClienteList />
  </div>
);
