import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import { getCountries } from './reducers/countriesReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({getCountries});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;