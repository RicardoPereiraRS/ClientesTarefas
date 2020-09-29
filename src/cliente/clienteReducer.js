const INITIAL_STATE = { nomeCliente: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, nomeCliente: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, nomeCliente: '' }
        default:
            return state
    }
}