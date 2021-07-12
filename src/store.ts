import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './app/countries';

export const store = createStore(reducers, applyMiddleware(thunk));