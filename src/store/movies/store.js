import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createSagaMiddleware from '@redux-saga/core';
import { movieReducer } from 'store/movies/movies.reducer';
// import moviesSaga from 'store/movies/movies.saga';

// const sagaMiddleware = createSagaMiddleware();
const allReducers = combineReducers(movieReducer); 
export const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());