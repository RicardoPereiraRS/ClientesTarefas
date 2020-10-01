import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Grid from "../../template/grid";
import IconButton from "../../template/iconButton";
import {add, changeDescription, search, clear, getData} from "./clienteActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.getData();
  }

  keyHandler(e) {
    const {add, clear, search, nomeCliente} = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(nomeCliente);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  render() {
    const {add, search, nomeCliente} = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Cadastre um cliente"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.nomeCliente}
          ></input>
        </Grid>
        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(nomeCliente)}
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

const mapStateToProps = (state) => ({nomeCliente: state.clientes.nomeCliente});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {add, changeDescription, search, clear, getData},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
