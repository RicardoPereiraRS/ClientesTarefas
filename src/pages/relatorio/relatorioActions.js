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
        const { pesquisaNomeTarefa, originalList } = getState().relatorio;

        if (!pesquisaNomeTarefa)
            return dispatch({ type: RELATORIO_SEARCHED, payload: originalList });

        //  const list = originalList.filter(item => item.nome.toLowerCase().includes(nomeCliente.toLowerCase()));

        dispatch({ type: RELATORIO_SEARCHED, payload: list });
    }
}



export const clear = () => {
    return (dispatch, getState) => {
        const { originalList } = getState().relatorio;

        dispatch({ type: RELATORIO_SEARCHED, payload: originalList });

        dispatch({ type: RELATORIO_CLEAR })
    }
}