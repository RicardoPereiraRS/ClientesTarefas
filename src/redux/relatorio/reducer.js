import * as TYPES from './types';

const INITIAL_STATE = {
    pesquisa: '',
    listRelatorio: [],
    originalListRelatorio: [],
 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.RELATORIO_GET_DATA:
            return { ...state, listRelatorio: action.payload, originalListRelatorio: action.payload }
        case TYPES.RELATORIO_DESCRIPTION_CHANGED:
            return { ...state, pesquisa: action.payload }
        case TYPES.RELATORIO_SEARCHED:
            return { ...state, listRelatorio: action.payload }
        case TYPES.RELATORIO_CLEAR:
            return { ...state, pesquisa: '' }

        default:
            return state
    }
}