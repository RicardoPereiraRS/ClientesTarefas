import api from '../../services/api'

import { RELATORIO_DESCRIPTION_CHANGED, RELATORIO_CLEAR, RELATORIO_GET_DATA, RELATORIO_SEARCHED } from '../../redux/relatorio/types';
import RelatorioList from '../relatorio/relatorioList';

export const changeDescription = event => ({
    type: RELATORIO_DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const getData = () => {
    return (dispatch, getState) => {
        api.get('/relatorio')
            .then(resp => dispatch({ type: RELATORIO_GET_DATA, payload: resp.data }))
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const { pesquisa, originalListRelatorio } = getState().relatorio;

        if (!pesquisa)
            return dispatch({ type: RELATORIO_SEARCHED, payload: originalListRelatorio });

        //  const list = originalList.filter(item => item.nome.toLowerCase().includes(nomeCliente.toLowerCase()));

        dispatch({ type: RELATORIO_SEARCHED, payload: listRelatorio });
    }
}



export const clear = () => {
    return (dispatch, getState) => {
        const { originalListRelatorio } = getState().relatorio;

        dispatch({ type: RELATORIO_SEARCHED, payload: originalListRelatorio });

        dispatch({ type: RELATORIO_CLEAR })
    }
}