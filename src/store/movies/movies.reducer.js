import { FETCH_MOVIES } from "./movies.constants";

import { FETCH_STATUSES } from "constants/index";
import { createReducer } from 'utils';

const initialState = {
    status: FETCH_STATUSES.IDLE,
    list: [],
};

const handlers = {
    [FETCH_MOVIES.REQUEST]: (state) => ({
        ...state,
        status: FETCH_STATUSES.REQUEST,
    }),
    [FETCH_MOVIES.SUCCESS]: (state, action) => ({
        ...state,
        list: action.payload.movies,
        status: FETCH_MOVIES.SUCCESS,
    }),
};

export default createReducer(initialState, handlers);
