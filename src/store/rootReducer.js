import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import moviesReducer  from 'store/movies/movies.reducer';
import johny from 'store/movies/movies.saga';


const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({ movies: moviesReducer }); 

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(johny)