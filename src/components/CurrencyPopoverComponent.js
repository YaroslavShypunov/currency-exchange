import React from 'react'
import '../sass/currencyPopoverComponent.sass';
import { Popover, List, ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { CURRENCY_ARRAY, EXCHANGE_CURRENCY } from '../Constants';
import { _SET_CHANGER_INFORMATION } from '../actions';
import { connect } from 'react-redux'

const CurrencyPopoverComponent = ({ type, id, open, anchorEl, handleClose, _SET_CHANGER_INFORMATION, changerReducer }) => {
    const handleChoiceCurrency = (name) => {
        _SET_CHANGER_INFORMATION(type === EXCHANGE_CURRENCY ? "fromCurrency" : "toCurrency", name)
        handleClose()
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            className='currency-popover'
        >
            <List >
                {changerReducer ? CURRENCY_ARRAY.map(({ name, icon }, index) => changerReducer.toCurrency !== name && name !== changerReducer.fromCurrency ? <ListItem key={index} button onClick={() => handleChoiceCurrency(name)}>
                    <ListItemAvatar>
                        <Avatar >
                            {icon}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={name} />
                </ListItem> : '') : ''}
            </List>

        </Popover>
    )
}


export default connect(state => ({
    changerReducer: state.ChangerReducer
}), {
        _SET_CHANGER_INFORMATION
    })(CurrencyPopoverComponent);