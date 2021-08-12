import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_MOVIES } from 'store/movies/movies.constants';
import { fetchMoviesFailure, fetchMoviesSuccess } from './movies.actions';






function fetchApi(val) {
    return fetch(`https://www.omdbapi.com/?apikey=1a230d46&s=${val}`).then(response => response.json());
}

function* fetchMovies({ payload }) {
    try {
        const movies = yield call(fetchApi, payload.searchValue);

        yield put(fetchMoviesSuccess(movies.Search));
    } catch (error) {
        yield put(fetchMoviesFailure(error.message))
    }
} 

function* mySaga(){
    yield takeEvery(FETCH_MOVIES.REQUEST, fetchMovies)
}

export default mySaga;