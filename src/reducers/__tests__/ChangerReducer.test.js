import ChangerReducer from '../ChangerReducer'
import { _SET_CHANGER_FULL_INFORMATION, _SET_CHANGER_INFORMATION } from '../../actions'

// test data
let action = _SET_CHANGER_FULL_INFORMATION({
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    fromNumber: 1000,
    toNumber: 908.6,
    rate: 0.9086,
    changeButtonClick: false
});
const state = {
    fromCurrency: 'EUR',
    toCurrency: 'USD',
    fromNumber: 0,
    toNumber: 0,
    rate: 0,
    changeButtonClick: true
};

it('The currency of current money should be USD', () => {

    // action
    let newState = ChangerReducer(state, action);

    // expectation
    expect(newState.fromCurrency).toBe('USD');
})

it('The currency of new money should be EUR', () => {

    // action
    let newState = ChangerReducer(state, action);

    // expectation
    expect(newState.toCurrency).toBe('EUR');
})

it('The money of current curency should be 1000', () => {

    // action
    let newState = ChangerReducer(state, action);

    // expectation
    expect(newState.fromNumber).toBe(1000);
})

it('The money of new currency should be 908.6', () => {

    // action
    let newState = ChangerReducer(state, action);

    // expectation
    expect(newState.toNumber).toBe(908.6);
})

it('The rate between USD and EUR should be 0.9086', () => {

    // action
    let newState = ChangerReducer(state, action);

    // expectation
    expect(newState.rate).toBe(0.9086);
})

it('The signal of the pressed changer of currency should be false ', () => {

    // action
    let newState = ChangerReducer(state, action);

    // expectation
    expect(newState.changeButtonClick).toBe(false);
})

it('After changing the current currency should be GBP', () => {

    let changeInformationAction = _SET_CHANGER_INFORMATION('fromCurrency','GBP')
    // action
    let newState = ChangerReducer(state, changeInformationAction);

    // expectation
    expect(newState.fromCurrency).toBe('GBP');
})
