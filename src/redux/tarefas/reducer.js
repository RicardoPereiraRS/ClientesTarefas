import * as TYPES from './types';

const INITIAL_STATE = {
     
    listTarefas: [],
    originalListTarefas: [],
    descricaoTarefa: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case TYPES.TAREFAS_SEARCHED:
            return { ...state, listTarefas: action.payload }
        case TYPES.TAREFAS_CLEAR:
            return { ...state, descricaoTarefa: '' }
        case TYPES.TAREFAS_GET_DATA:
            return { ...state, listTarefas: action.payload, originalListTarefas: action.payload }
        case TYPES.TAREFA_DESCRIPTION_CHANGED:
            return { ...state, descricaoTarefa: action.payload }

        default:
            return state
    }
}