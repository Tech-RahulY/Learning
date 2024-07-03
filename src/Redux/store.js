import {combineReducers , applyMiddleware} from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import UserReducer from './Reducers/UserReducer'

const logger = createLogger();
const rootReducers= combineReducers({
    Users : UserReducer
});

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk)
});

export default store;
