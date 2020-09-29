import React from 'react'

import PageHeader from '../template/pageHeader'
import ClienteForm from './clienteForm'
import ClienteList from './clienteList'

export default props => (
    <div>
        <PageHeader name='Clientes' small='Cadastro'></PageHeader>
        <ClienteForm />
        <ClienteList />
    </div>
)