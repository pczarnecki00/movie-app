import { FETCH_MOVIES } from "./movies.constants";



export const fetchMoviesRequest = (searchValue) => ({
    type: FETCH_MOVIES.REQUEST,
    payload: {
        searchValue,
    }
})

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES.SUCCESS,
    payload: {
        movies,
    },
})

export const fetchMoviesFailure = (error) => ({
    type: FETCH_MOVIES.FAILURE,
    payload: {
        error,
    }
})