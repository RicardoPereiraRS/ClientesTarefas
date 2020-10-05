import { combineReducers } from 'redux'
import clienteReducer from './clientes/reducer'
import tarefasReducer from './tarefas/reducer'
import relatorioReducer from './relatorio/reducer'

const rootReducer = combineReducers({
    clientes: clienteReducer,
    tarefas: tarefasReducer,
    relatorio:relatorioReducer

});

export default rootReducer