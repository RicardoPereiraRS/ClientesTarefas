import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const RelatorioList = (props) => {
  const renderRows = () => {
    const list = props.listRelatorio || [];

    return list.map((tarefa) => (
      <tr>
        <td>{tarefa.descricao}</td>
        <td>{tarefa.nome}</td>
        <td>{formataData(tarefa.dataCriacao)}</td>
      </tr>
    ));
  };

  return (
    <table className="table">
      
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Cliente</th>
          <th>Criado em</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  listRelatorio: state.relatorio.listRelatorio,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({}, dispatch);

function formataData(date) {
  const data = new Date(date);
  var dd = String(data.getDate()).padStart(2, "0");
  var mm = String(data.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = data.getFullYear();
  return dd + "/" + mm + "/" + yyyy;
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioList);
