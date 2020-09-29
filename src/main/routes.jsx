import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Cliente from '../cliente/cliente'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/clientes' component={Cliente} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/clientes' />
    </Router>
)