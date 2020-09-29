import { combineReducers } from 'redux'
import clienteReducer from '../cliente/clienteReducer'

const rootReducer = combineReducers({
    todo: clienteReducer
})

export default rootReducer