import { 
    MOVIES_FETCHING, 
    MOVIES_SUCCESS, 
    MOVIES_FAILURE 
} from "./movies.constants";
import { movies } from './moviedata';


export const fetchMoviesRequest = () => {
    return {
        type: MOVIES_FETCHING,
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: MOVIES_SUCCESS,
        payload: [movies],
    }
}
export const fetchMoviesFailure = () =>{
    return {
        type: MOVIES_FAILURE,
    }
}