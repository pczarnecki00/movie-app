import React from "react";
import { useSelector } from "react-redux";

import { Container } from 'atoms/Container/Container';
import { MoviesList } from 'templates/HomePage/MoviesList/MoviesList';


export const HomePage = () => {
    const movies = useSelector(state => state.movies.list);
    const status = useSelector(state => state.movies.status);


    return (
        <div className="home-page">
            <Container>
                <MoviesList movies={movies} status={status} />
            </Container>
        </div>
    )
}