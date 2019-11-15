const initialState = {
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    fromNumber: 0,
    toNumber: 0,
    rate: 0,
    changeButtonClick: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_CHANGER_FULL_INFORMATION':
        return { ...payload }
    case 'SET_CHANGER_INFORMATION':
        return {...state, [payload.id]: payload.action}
    default:
        return state
    }
}
