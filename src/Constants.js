export const EXCHANGE_CURRENCY = 'EXCHANGE_CURRENCY'

export const MAX_NUMBER_LENGTH = '10'

export const USD = {
    name: 'USD',
    icon: '$',
};
export const EUR = {
    name: 'EUR',
    icon: '€'
};
export const GBP = {
    name: 'GBP',
    icon: '£'
}

export const CURRENCY_ARRAY = [USD, EUR, GBP];

export const currencyIcon = (currency) => {
    switch (true) {
        case currency === GBP.name:
            return GBP.icon;
        case currency === EUR.name:
            return EUR.icon;
        case currency === USD.name:
            return USD.icon
        default:
            return currency
    }
}