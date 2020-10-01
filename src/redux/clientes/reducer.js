import * as TYPES from './types';

const INITIAL_STATE = {
    nomeCliente:'',
    list: [],
    originalList: [],
  //  listTarefas: [],
  //  originalListTarefas: [],

  //  descricaoTarefa: '',



}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.TODO_GET_DATA:
            return { ...state, list: action.payload, originalList: action.payload }
        case TYPES.DESCRIPTION_CHANGED:
            return { ...state, nomeCliente: action.payload }
        case TYPES.TODO_SEARCHED:
            return { ...state, list: action.payload }
        case TYPES.TODO_CLEAR:
            return { ...state, nomeCliente: '' }
          
        default:
            return state
    }
}