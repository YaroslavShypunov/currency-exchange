import React, { useEffect } from 'react'
import '../sass/pages/echangePage.sass';
import { Box } from '@material-ui/core';
import ValuteContainerComponent from '../components/ValuteContainerComponent';
import ExchangeRateComponent from '../components/ExchangeRateComponent';
import { connect } from "react-redux";
import { _SET_CHANGER_INFORMATION } from "../actions"
import Axios from 'axios';
import { currencyIcon, EXCHANGE_CURRENCY, USD, EUR } from '../Constants';

const ExchangePage = ({ changerReducer, _SET_CHANGER_INFORMATION }) => {
    const getRate = () => {
        Axios.get(`/latest?base=${changerReducer ? changerReducer.fromCurrency : USD.name}&symbols=${changerReducer ? changerReducer.toCurrency : EUR.name }`).then((success) => {
            _SET_CHANGER_INFORMATION('rate', success.data.rates[changerReducer.toCurrency].toFixed(4))
        })
    }
    useEffect(() => {
        getRate() 
    }, [changerReducer && changerReducer.fromCurrency, changerReducer && changerReducer.toCurrency])
    useEffect(() => {
        const interval = setInterval(getRate, 10000)
        return () => clearInterval(interval)
    })
    return (
        <Box>
            <ValuteContainerComponent currency={changerReducer ? changerReducer.fromCurrency : USD.name} currencyIcon={currencyIcon(changerReducer ? changerReducer.fromCurrency : USD.name)} number={changerReducer ? changerReducer.fromNumber : 0} type={EXCHANGE_CURRENCY} />
            <ExchangeRateComponent fromCurrencyIcon={currencyIcon(changerReducer ? changerReducer.fromCurrency : USD.name)} toCurrencyIcon={currencyIcon(changerReducer ? changerReducer.toCurrency  : EUR.name)} />
            <ValuteContainerComponent currency={changerReducer ? changerReducer.toCurrency :  EUR.name} currencyIcon={currencyIcon(changerReducer ? changerReducer.toCurrency : EUR.name )} number={changerReducer ? changerReducer.toNumber : 0} />
        </Box>
    )
}


export default connect(state => ({
    changerReducer: state.ChangerReducer
}), {
        _SET_CHANGER_INFORMATION
    })(ExchangePage);