import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import IconButton from "../../template/iconButton";

const RelatorioList = (props) => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map((tarefa,cliente) => (
      <tr>
        <td>{cliente.nome}</td>
       
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Tarefa</th>
          <th className="tableActions">Cliente</th>
          <th className="tableActions">Criado em</th>

        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({list: state.relatorio.list});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({clear}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RelatorioList);


