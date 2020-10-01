import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Grid from "../../template/grid";
import IconButton from "../../template/iconButton";
import {
  add,
  tarefaChangeDescription,
  search,
  clear,
  getData,
} from "./tarefasActions";


class TarefasForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    console.log("this.props.clienteId: ", this.props.clienteId);

    this.props.getData(this.props.clienteId);
  }

  keyHandler(e) {
    const {add, clear, search, nome} = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(nome);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  render() {
    const {add, search, descricaoTarefa} = this.props;

    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Cadastre uma tarefa"
            onChange={this.props.tarefaChangeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.descricaoTarefa}
          ></input>
        </Grid>
      
        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(this.props.clienteId,descricaoTarefa)}
          ></IconButton>
          <IconButton style="info" icon="search" onClick={search}></IconButton>
          <IconButton
            style="default"
            icon="close"
            onClick={this.props.clear}
          ></IconButton>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({descricaoTarefa: state.tarefas.descricaoTarefa});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {add, tarefaChangeDescription, search, clear, getData},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TarefasForm);
