import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import IconButton from "../../template/iconButton";
import {getData} from "./relatorioActions";



const RelatorioList = (props) => {
  const renderRows = () => {
    const list = props.listRelatorio || [];

    return list.map(({}) => (
      <tr>
        <td>{}</td>
        <td>{}</td>
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

const mapStateToProps = (state) => ({
  listRelatorio: state.relatorio.listRelatorio,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({getData}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RelatorioList);
