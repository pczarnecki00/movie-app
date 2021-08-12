import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';


import moviesReducer, { favReducer } from 'store/movies/movies.reducer';
import mySaga from 'store/movies/movies.saga';



const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({ movies: moviesReducer, fav: favReducer });

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga)

