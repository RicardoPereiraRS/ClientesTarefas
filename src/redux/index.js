import { combineReducers } from 'redux'
import clienteReducer from './clientes/reducer'
import tarefasReducer from './tarefas/reducer'
// import relatorioReducer from '../cliente/relatorioReducer'

const rootReducer = combineReducers({
    clientes: clienteReducer,
    tarefas: tarefasReducer
});
// relatorio: relatorioReducer

export default rootReducer