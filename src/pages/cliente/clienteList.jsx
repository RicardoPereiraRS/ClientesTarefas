import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import IconButton from "../../template/iconButton";
import {markAsDone, markAsPending, remove} from "./clienteActions";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map((cliente) => (
      <tr key={cliente.id}>
        <td>{cliente.nome}</td>
        <td>
          <a href={`#/tarefas/${cliente.id}?nome=${cliente.nome}`}>
            <IconButton style="info" icon="chevron-right" hide={cliente.done} />
          </a>
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

const mapStateToProps = (state) => ({list: state.clientes.list});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({markAsDone, markAsPending, remove}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
