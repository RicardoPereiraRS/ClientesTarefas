import * as TYPES from './types';

const INITIAL_STATE = {
    nomeCliente: '',
    list: [],
    originalList: [],
   
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.CLIENTE_GET_DATA:
            return { ...state, list: action.payload, originalList: action.payload }
        case TYPES.CLIENTE_DESCRIPTION_CHANGED:
            return { ...state, nomeCliente: action.payload }
        case TYPES.CLIENTE_SEARCHED:
            return { ...state, list: action.payload }
        case TYPES.CLIENTE_CLEAR:
            return { ...state, nomeCliente: '' }

        default:
            return state
    }
}