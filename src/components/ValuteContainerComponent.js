import React, { useState, useEffect } from 'react'
import '../sass/valuteContainerComponent.sass';
import { Box, Typography, Input, } from '@material-ui/core';
import { connect } from 'react-redux'
import { _SET_CHANGER_INFORMATION } from '../actions'
import { EXCHANGE_CURRENCY, MAX_NUMBER_LENGTH } from '../Constants';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import CurrencyPopoverComponent from './CurrencyPopoverComponent';

const ValuteContainerComponent = ({ changerReducer, _SET_CHANGER_INFORMATION, number, currency, currencyIcon, type }) => {
    const [value, setValue] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'currency' : undefined;
    const calculateNumber = (n) => {
        const newNum = n.length > MAX_NUMBER_LENGTH ? n.slice(0, MAX_NUMBER_LENGTH) : n
        setValue(toFixedNumber(newNum))
        handleChangeInformation(toFixedNumber(newNum))
    }
    useEffect(() => {
        setValue(number > 0 ? toFixedNumber(number) : '')
    }, [number])
    useEffect(() => {
        if (changerReducer && !changerReducer.changeButtonClick) {
            _SET_CHANGER_INFORMATION(type === EXCHANGE_CURRENCY ? "fromNumber" : "toNumber", type === EXCHANGE_CURRENCY ? toFixedNumber(changerReducer.fromNumber) : toFixedNumber(changerReducer.fromNumber * changerReducer.rate))
        }
        _SET_CHANGER_INFORMATION('changeButtonClick', false)
    }, [changerReducer && changerReducer.rate])
    const handleChangeInformation = (n) => {
        if (changerReducer && !changerReducer.changeButtonClick) {
            if (type === EXCHANGE_CURRENCY) {
                _SET_CHANGER_INFORMATION('toNumber', toFixedNumber(n * changerReducer.rate));
                _SET_CHANGER_INFORMATION('fromNumber', toFixedNumber(n));
            } else {
                _SET_CHANGER_INFORMATION('fromNumber', toFixedNumber(n / changerReducer.rate));
                _SET_CHANGER_INFORMATION('toNumber', toFixedNumber(n));
            }
        }
        _SET_CHANGER_INFORMATION('changeButtonClick', false)
    }
    const handleChoiceCurrency = event => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toFixedNumber = (n) => {
        let toNum = Number(n);
        return n % 1 === 0 ? toNum : toNum.toFixed(2)
    }
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' className={`valure-container-component ${type ? 'exchange-currency' : ''}`}>
            <Box>
                <Typography aria-describedby={id} variant='h1' onClick={handleChoiceCurrency} className='currency-container'>
                    {currency}
                    <ExpandMoreRoundedIcon className='arrow-icon' />
                </Typography>
                <CurrencyPopoverComponent type={type} id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} />
            </Box>
            <Box>
                <Box display='flex' className='number-container' >
                    <Input onChange={(e) => calculateNumber(e.target.value)} className={`input-number ${type !== EXCHANGE_CURRENCY || value < 0 ? 'disabledColor' : ''}`} placeholder='0' type='number' value={value} />
                </Box>
                {value < 0 ? <Typography align='right' variant='h6' color='textSecondary'>
                    the number cannot be negative
                </Typography> : ''}
            </Box>
        </Box>
    )
}


export default connect(state => ({
    changerReducer: state.ChangerReducer
}), {
        _SET_CHANGER_INFORMATION
    })(ValuteContainerComponent);