import { put, call, takeEvery } from "redux-saga/effects";
import { MOVIES_FAILURE, MOVIES_FETCHING, MOVIES_SUCCESS } from 'store/movies/movies.constants';






function fetchApi() {
    return fetch(`https://www.omdbapi.com/?apikey=1a230d46&s=bat`).then(response => response.json());
}

function* fetchMovies() {
   const movie = yield call(fetchApi);
     movie ? yield put({ type: MOVIES_SUCCESS, payload: movie}) : yield put({ type: MOVIES_FAILURE})
} 

export function* mySaga(){
    yield takeEvery(MOVIES_FETCHING, fetchMovies)
    }