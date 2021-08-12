import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavMovies } from 'store/movies/movies.actions';

import { FETCH_MOVIES } from "store/movies/movies.constants";
import { MovieItem } from '../MovieItem/MovieItem';

import loading from 'assets/loading.gif';
import './MoviesList.css';

export const MoviesList = ({ movies = [], status = FETCH_MOVIES.IDLE }) => {
    const error = useSelector(state => state.movies?.error)
    const stateFavMovies = useSelector(state => state.fav.fav)

    const dispatch = useDispatch();

    const favMovies = (favMov) => {
      
        let favArr = [...stateFavMovies]
        favArr = stateFavMovies.some(item => item.imdbID === favMov.imdbID) ? stateFavMovies.filter(item => item.imdbID !== favMov.imdbID) : [...favArr, favMov];

        dispatch(addFavMovies(favArr))
        localStorage.setItem('favMovies', JSON.stringify(favArr))
        console.log(favMov);
    }
  
    return (
        <>
            {status === FETCH_MOVIES.REQUEST && <div className="loading"><img src={loading} alt="loader" /></div>}
            {status === FETCH_MOVIES.SUCCESS && movies.length === 0 ? 'Sorry we were not able to find your movie ' : (
                <ul className="movies-list">
                    {movies.map((item) => (
                        <MovieItem favStyle={stateFavMovies.some(favMovies => favMovies.imdbID === item.imdbID) && 'favMov' } buttonClick={() => {favMovies(item)}} key={item.imdbID} {...item} />
                    ))}
                </ul>
            )}
            {status === FETCH_MOVIES.FAILURE && <div>{error }</div>}
</>
    )}