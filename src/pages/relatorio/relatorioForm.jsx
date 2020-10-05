import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Grid from "../../components/grid";
import IconButton from "../../components/iconButton";
import {
  add,
  changeDescription,
  search,
  clear,
  getData,
} from "./relatorioActions";

class RelatorioForm extends Component {
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
    const { search, pesquisa} = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Pesquise por cliente ou tarefa"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.pesquisa}
          ></input>
        </Grid>
        <Grid cols="12 3 2">
         
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

const mapStateToProps = (state) => ({pesquisa: state.relatorio.pesquisa});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({changeDescription, search, clear, getData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioForm);
