import axios from 'axios'
import api from '../services/api'

const URL = 'https://localhost:5001/clientes'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {


    return (dispatch, getState) => {
        const nomeCliente = getState().todo.nomeCliente
        const search = nomeCliente ? `&description__regex=/${nomeCliente}/` : ''
        const request = axios.get(URL)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

export const search_old = () => {


    return (dispatch, getState) => {
        const nomeCliente = getState().todo.nomeCliente
        const search = nomeCliente ? `&description__regex=/${nomeCliente}/` : ''
        const request = axios.get(`${URL}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}


export const add = (nomeCliente) => {

    const cliente = { nome: nomeCliente }
    return dispatch => {
        api.post('/clientes', cliente)
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const add_old = (description) => {

    const cliente = { nome: description }
    return dispatch => {
        axios.post(URL, cliente)
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}


export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}