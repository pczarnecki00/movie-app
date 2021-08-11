import { 
    MOVIES_FETCHING, 
    MOVIES_SUCCESS, 
    MOVIES_FAILURE,
    MOVIES_SEARCH
} from "./movies.constants";

const initialState = {
    isFetching: false,
    isError: false,
    movies: null
}

export const movies = (state = initialState, {type, payload}) => {
    switch(type) {
        case MOVIES_FETCHING:
            return { ...state, isFetching: true, isError: false, movies: null };
        case MOVIES_SUCCESS:
            return { ...state, isFetching: false, isError: false, movies: payload };
        case MOVIES_FAILURE:
            return { ...state, isFetching: false, isError: true, movies: null }
        default: 
            return state;
    }
}

const searchState= {searchVal: ''}
export const search = (state = searchState ,{ type, payload }) => {
    switch(type) {
        case MOVIES_SEARCH:
            return {...state, searchVal: payload }
        default:
            return state;
    }
}
