import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import IconButton from "../template/iconButton";
import {markAsDone, markAsPending, remove} from "./clienteActions";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((cliente) => (
      <tr key={cliente._id}>

        <td>{cliente.nome}</td>

        <td>
          <IconButton
            style="info"
            icon="chevron-right"
            hide={cliente.done}
            onClick={() => props.markAsDone(cliente)}
          ></IconButton>
          <IconButton
            style="warning"
            icon="undo"
            hide={!cliente.done}
            onClick={() => props.markAsPending(cliente)}
          ></IconButton>
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!cliente.done}
            onClick={() => props.remove()}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome do Cliente</th>
        
          <th className="tableActions">Tarefas</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({list: state.todo.list});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({markAsDone, markAsPending, remove}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
