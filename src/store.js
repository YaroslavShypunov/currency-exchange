import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import ChangerReducer from './reducers/ChangerReducer'

const _store = createStore(
    combineReducers({
        ChangerReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            thunk,
        )
    )
)

export default _store;
