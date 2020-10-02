import api from '../../services/api'

import { DESCRIPTION_CHANGED, TODO_CLEAR, TODO_GET_DATA, TODO_SEARCHED } from '../../redux/clientes/types';
import tarefasList from '../tarefas/tarefasList';

export const changeDescription = event => ({
    type: DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const getData = () => {
    return (dispatch, getState) => {
        api.get('/clientes')
            .then(resp => dispatch({ type: TODO_GET_DATA, payload: resp.data }))
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const { nomeCliente, originalList } = getState().clientes;

        if (!nomeCliente)
            return dispatch({ type: TODO_SEARCHED, payload: originalList });

        const list = originalList.filter(item => item.nome.toLowerCase().includes(nomeCliente.toLowerCase()));

       dispatch({ type: TODO_SEARCHED, payload: list });
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

        dispatch({ type: TODO_SEARCHED, payload: originalList });

        dispatch({ type: TODO_CLEAR })
    }
} 