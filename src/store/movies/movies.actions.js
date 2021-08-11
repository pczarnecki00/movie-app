import { 
    MOVIES_FETCHING, 
    MOVIES_SUCCESS, 
    MOVIES_FAILURE, 
    MOVIES_SEARCH
} from "./movies.constants";



export const fetchMoviesRequest = (val) => {
    return {
        type: MOVIES_FETCHING,
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: MOVIES_SUCCESS,
        payload: movies,
    }
}
export const fetchMoviesFailure = () =>{
    return {
        type: MOVIES_FAILURE,
    }
}

export const searchInput = (value) => {
    return {
        type: MOVIES_SEARCH,
        payload: value
    }
}