import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExchangePage from './pages/ExchangePage';

const Root = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ExchangePage} />
            </Switch>
        </BrowserRouter>
    )
}


export default Root;