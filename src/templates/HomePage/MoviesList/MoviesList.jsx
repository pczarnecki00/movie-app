import { FETCH_STATUSES } from "constants/index";
import { MovieItem } from '../MovieItem/MovieItem';
import './MoviesList.css';

export const MoviesList = ({ movies = [], status = FETCH_STATUSES.IDLE }) => {
    return (
        <>
            {status === FETCH_STATUSES.REQUEST && <div>Loading...</div>}
            {status === FETCH_STATUSES.SUCCESS && (
                <ul className="movies-list">
                    {movies.map((item) => (
                        <MovieItem {...item} />
                    ))}
                </ul>
            )}
        </>
    )
}