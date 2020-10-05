import React from "react";
import Menu from "../../components/menu";
import PageHeader from "../../components/pageHeader";
import RelatorioForm from "./relatorioForm";
import RelatorioList from "./relatorioList";

export default (props) => (
  <div>
    <Menu />
    <PageHeader name="Relatório"></PageHeader>
    <RelatorioForm />
    <RelatorioList />
  </div>
);
