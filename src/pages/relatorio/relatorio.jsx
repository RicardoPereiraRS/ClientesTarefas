import React from "react";
import Menu from "../../template/menu";
import PageHeader from "../../template/pageHeader";
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
