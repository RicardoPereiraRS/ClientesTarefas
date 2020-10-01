import * as TYPES from './types';

const INITIAL_STATE = {
    pesquisaNomeTarefa: '',
    list: [],
    originalList: []
    //  listTarefas: [],
    //  originalListTarefas: [],



}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.RELATORIO_GET_DATA:
            return { ...state, list: action.payload, originalList: action.payload }
        case TYPES.RELATORIO_DESCRIPTION_CHANGED:
            return { ...state, pesquisaNomeTarefa: action.payload }
        case TYPES.RELATORIO_SEARCHED:
            return { ...state, list: action.payload }
        case TYPES.RELATORIO_CLEAR:
            return { ...state, pesquisaNomeTarefa: '' }

        default:
            return state
    }
}