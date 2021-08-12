import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesRequest } from 'store/movies/movies.actions';

import { Container } from 'atoms/Container/Container';
import { Heading } from 'atoms/Heading/Heading';
import { SearchInput } from 'molecules/SearchInput/SearchInput';



import './Header.css';

export const Header = (props) => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");

    const onChange = useCallback((e) => {
        const val = e.target.value;

        val.length > 2 && dispatch(fetchMoviesRequest(val));
        setSearchValue(val);
    }, [setSearchValue, dispatch]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        dispatch(fetchMoviesRequest(searchValue));
    }, [searchValue, dispatch]);
   return (

        <header className="header">
            <Container type='flex-space'>
                <Heading>Best movie site</Heading>
                <SearchInput value={searchValue} onChange={onChange} onSubmit={onSubmit} />
            </Container>
        </header>
    )
}