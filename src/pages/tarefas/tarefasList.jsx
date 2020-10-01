import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {markAsDone, markAsPending, remove} from "./tarefasActions";

function formataData(date) {
  const data=new Date(date)
  var dd = String(data.getDate()).padStart(2, "0");
  var mm = String(data.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = data.getFullYear();
  return dd + "/" + mm + "/" + yyyy;

}

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.listTarefas || [];

    return list.map((tarefa) => (
      <tr key={tarefa.id}>
        <td>{tarefa.descricao}</td>
        <td>{formataData(tarefa.dataCriacao)}</td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descricao</th>

          <th className="tableActions">Criado em</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({listTarefas: state.tarefas.listTarefas});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({markAsDone, markAsPending, remove}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
