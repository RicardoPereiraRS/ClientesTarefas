import axios from 'axios'
import api from '../../services/api'

import { TAREFA_DESCRIPTION_CHANGED,TAREFAS_CLEAR, TAREFAS_GET_DATA,TAREFAS_SEARCHED } from '../../redux/tarefas/types';

export const changeDescription = event => ({
    type: DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const tarefaChangeDescription = event => ({
    type: TAREFA_DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const getData = (id) => {
   
    return (dispatch, getState) => {
        api.get(`/tarefas/${id}`)
            .then(resp => dispatch({ type: TAREFAS_GET_DATA, payload: resp.data }))
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const { descricaoTarefa, originalLisTarefas } = getState().tarefas;

        if (!descricaoTarefa)
            return dispatch({ type: TAREFAS_SEARCHED, payload: originalLisTarefas });

        const list = originalList.filter(item => item.descricao.toLowerCase().includes(descricaoTarefa.toLowerCase()));

        dispatch({ type: TAREFAS_SEARCHED, payload: list });
    }
}

export const add = (clienteId,descricaoTarefa) => {
    const tarefa = {
        descricao: descricaoTarefa,
        dataCriacao: getDataAtual()
    }
    return dispatch => {
        api.post(`/tarefas/${clienteId}`, tarefa)
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(getData()))
    }
}

export const clear = () => {
    return (dispatch, getState) => {
        const { originalListTarefas } = getState().tarefas;

        dispatch({ type: TAREFAS_SEARCHED, payload: originalListTarefas });

        dispatch({ type: TAREFAS_CLEAR })
    }
}

const getDataAtual = () => {
    // '2015-12-21'
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
}