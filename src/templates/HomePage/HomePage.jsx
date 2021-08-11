import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from 'atoms/Container/Container';
import { SearchInput } from 'molecules/SearchInput/SearchInput';
import { MoviesList } from 'templates/HomePage/MoviesList/MoviesList';
import { moviesFetchStatusSelector, moviesSelector } from 'store/movies/movies.selectors';
import { fetchMoviesRequest } from 'store/movies/movies.actions';

export const HomePage = () => {
    const dispatch = useDispatch();
    const movies = useSelector(moviesSelector);
    const status = useSelector(moviesFetchStatusSelector);

    const [searchValue, setSearchValue] = useState("");

    const onChange = useCallback((e) => {
        const val = e.target.value;

        val.length > 3 && dispatch(fetchMoviesRequest(val));
        setSearchValue(val);
    }, [setSearchValue, dispatch]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        dispatch(fetchMoviesRequest(searchValue));
    }, [searchValue, dispatch]);

    console.log(searchValue, movies);

    return (
        <div className="home-page">
            <Container>
                <SearchInput value={searchValue} onChange={onChange} onSubmit={onSubmit}  />
                <MoviesList movies={movies} status={status} />
            </Container>
        </div>
    )
}