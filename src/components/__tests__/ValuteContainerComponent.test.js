import React from 'react';
import {create} from 'react-test-renderer';
import ValuteContainerComponent from '../ValuteContainerComponent';
import { EXCHANGE_CURRENCY } from '../../Constants';
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    fromNumber: 1000,
    toNumber: 90.93,
    rate: 0.9093,
    changeButtonClick: false
});
describe("ValuteContainerComponent", () => {
    test("ValuteContainerComponent should render", () => {
        mount(<Provider store={store}>
            <ValuteContainerComponent currency='USD' currencyIcon='$' number='1000' type={EXCHANGE_CURRENCY} />
        </Provider>);
    })
});