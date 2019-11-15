import React from 'react'
import '../sass/exchangeRateComponent.sass';
import { Box } from '@material-ui/core';
import SecondaryButtonComponent from './SecondaryButtonComponent';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { connect } from 'react-redux'
import { _SET_CHANGER_FULL_INFORMATION } from '../actions';
import { USD, EUR} from '../Constants'
import Axios from 'axios';

const ExchangeRateComponent = ({ _SET_CHANGER_FULL_INFORMATION, fromCurrencyIcon, toCurrencyIcon, changerReducer }) => {
    const handleChangeCurrency = () => {
        Axios.get(`/latest?base=${changerReducer ? changerReducer.toCurrency : USD.name}&symbols=${changerReducer ? changerReducer.fromCurrency : EUR.name}`).then((success) => {
            const rate = success.data.rates[changerReducer.fromCurrency].toFixed(4)
            _SET_CHANGER_FULL_INFORMATION({
                fromCurrency: changerReducer ? changerReducer.toCurrency : USD.name,
                toCurrency: changerReducer ? changerReducer.fromCurrency : EUR.name,
                fromNumber: changerReducer ? changerReducer.fromNumber / rate : 0,
                toNumber: changerReducer ? changerReducer.fromNumber : 0,
                rate: rate,
                changeButtonClick: true
            })
        })

    }
    return (
        <Box className='exchange-rate-container'>
            <SecondaryButtonComponent onClick={handleChangeCurrency} icon={<ImportExportIcon />} />
            <SecondaryButtonComponent icon={<TrendingUpIcon />} title={` 1 ${fromCurrencyIcon}  =  ${changerReducer ? changerReducer.rate : 0} ${toCurrencyIcon}`} className='exchange-rate-button' />
        </Box>
    )
}


export default connect(state => ({
    changerReducer: state.ChangerReducer
}), {
        _SET_CHANGER_FULL_INFORMATION
    })(ExchangeRateComponent);