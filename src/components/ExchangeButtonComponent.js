import React from 'react'
import '../sass/exchangeButtonComponent.sass';
import { Fab } from '@material-ui/core';

const ExchangeButtonComponent = (props) => {

    return (
        <div id='exchangeButtonContainer'>
            <Fab variant='extended' color='primary'>
               Exchange
            </Fab>
        </div>
    )
}


export default ExchangeButtonComponent;