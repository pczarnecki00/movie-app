
import { FETCH_MOVIES, FAV_MOVIES } from "./movies.constants";
import { createReducer } from 'utils/createReducer';

const initialState = {
    status: FETCH_MOVIES.IDLE,
    list: [],
};

const handlers = {
    [FETCH_MOVIES.REQUEST]: (state) => ({
        ...state,
        status: FETCH_MOVIES.REQUEST,

    }),
    [FETCH_MOVIES.SUCCESS]: (state, action) => ({
        ...state,
        list: action.payload.movies,
        status: FETCH_MOVIES.SUCCESS,
    }),
    [FETCH_MOVIES.FAILURE]: (state, action) => ({
        ...state,
        error: action.payload,
        status: FETCH_MOVIES.FAILURE,
    }),
};

const localState = {
    fav: JSON.parse(localStorage.getItem('favMovies')) ? JSON.parse(localStorage.getItem('favMovies')) : []
};
export const favReducer = (state = localState, { type, payload }) => {
    switch (type) {
        case FAV_MOVIES.FAV:
            return { ...state, fav: payload }
        default:
            return state;
    }

}
export default createReducer(initialState, handlers);


