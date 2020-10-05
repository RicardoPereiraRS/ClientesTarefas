import api from '../../services/api'
import {CLIENTE_DESCRIPTION_CHANGED, CLIENTE_CLEAR, CLIENTE_GET_DATA, CLIENTE_SEARCHED } from '../../redux/clientes/types';

export const changeDescription = event => ({
    type: CLIENTE_DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const getData = () => {
    return (dispatch, getState) => {
        api.get('/clientes')
            .then(resp => dispatch({ type: CLIENTE_GET_DATA, payload: resp.data }))
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const { nomeCliente, originalList } = getState().clientes;

        if (!nomeCliente)
            return dispatch({ type: CLIENTE_SEARCHED, payload: originalList });

        const list = originalList.filter(item => item.nome.toLowerCase().includes(nomeCliente.toLowerCase()));

       dispatch({ type: CLIENTE_SEARCHED, payload: list });
    }
}

export const add = (nomeCliente) => {
    const cliente = { nome: nomeCliente }
    return dispatch => {
        api.post('/clientes', cliente)
            .then(() => dispatch(clear()))
            .then(() => dispatch(getData()))
    }
}

export const clear = () => {
    return (dispatch, getState) => {
        const { originalList } = getState().clientes;

        dispatch({ type: CLIENTE_SEARCHED, payload: originalList });

        dispatch({ type: CLIENTE_CLEAR })
    }
} 