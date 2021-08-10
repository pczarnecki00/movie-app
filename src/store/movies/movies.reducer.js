import { 
    MOVIES_FETCHING, 
    MOVIES_SUCCESS, 
    MOVIES_FAILURE 
} from "./movies.constants";

const initialState = {
    isFetching: false,
    isError: false,
    result: null,
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case MOVIES_FETCHING:
            return { ...state, isFetching: true, isError: false, result: null };
        case MOVIES_SUCCESS:
            return { ...state, isFetching: false, isError: false, result: payload };
        case MOVIES_FAILURE:
            return { ...state, isFetching: false, isError: true, reuls: null }
        default: 
            return state;
    }
}