import api from '../../services/api'
import { RELATORIO_DESCRIPTION_CHANGED, RELATORIO_CLEAR, RELATORIO_GET_DATA, RELATORIO_SEARCHED } from '../../redux/relatorio/types';

export const changeDescription = event => ({
    type: RELATORIO_DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const getData = () => {
    return (dispatch, getState) => {
        api.get('/relatorio')
            .then(resp => dispatch({ type: RELATORIO_GET_DATA, payload: geraListaDados(resp.data) }))
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const { pesquisa, originalListRelatorio } = getState().relatorio;

        if (!pesquisa)
            return dispatch({ type: RELATORIO_SEARCHED, payload: originalListRelatorio });

        const list = originalListRelatorio.filter(filtrar)
        dispatch({ type: RELATORIO_SEARCHED, payload: list });

        function filtrar(item) {
            return (item.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
                item.descricao.toLowerCase().
                    includes(pesquisa.toLowerCase()))
        }
    }
}

export const clear = () => {
    return (dispatch, getState) => {
        const { originalListRelatorio } = getState().relatorio;

        dispatch({ type: RELATORIO_SEARCHED, payload: originalListRelatorio });

        dispatch({ type: RELATORIO_CLEAR })
    }
}

function geraListaDados(list) {

    let dados = []
    list.forEach(cliente => {
        cliente.tarefas.forEach
            (tarefa => {
                dados.push({
                    nome: cliente.nome,
                    descricao: tarefa.descricao,
                    dataCriacao: tarefa.dataCriacao
                })
            })
    })

    return dados
}