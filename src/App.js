import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from 'molecules/SearchInput/SearchInput';
import { Header } from 'organisms/Header/Header';
import { Container } from 'atoms/Container/Container';
import { Heading } from 'atoms/Heading/Heading';
import { HomePage } from 'templates/HomePage/HomePage';
import { MoviesList } from 'templates/HomePage/MoviesList/MoviesList';
import { MovieItem } from 'templates/HomePage/Movie/MovieItem';
import { movies } from 'moviedata';
import { fetchMoviesRequest, searchInput } from 'store/movies/movies.actions';
import './App.css';


function App() {
  const dispatch = useDispatch()

  const submit = e => {
    e.preventDefault()
  }
  const handleChange = value => {

    dispatch(searchInput(value))
  }

  const stateSearchVal = useSelector(state => state.search.searchVal)

  useEffect(() => {

    return dispatch(fetchMoviesRequest(stateSearchVal))

  }, [dispatch, stateSearchVal])


  return (
    <div className="App">
      <HomePage>
        <Header>
          <Container type='flex-space'>
            <Heading>Best movie site</Heading>
            <SearchInput onSubmit={submit} onChange={(e) => handleChange(e.target.value)} />
          </Container>

        </Header>
        <Container>
          <MoviesList>
            {/* {movies.map( movie => 
            <MovieItem key={movie.title} img={movie.info.image_url.img} title={movie.title} year={movie.year} genre={movie.info.genres} actors={movie.info.actors} director={movie.info.directors}></MovieItem>
            )} */}
          </MoviesList>
        </Container>
      </HomePage>
    </div>
  );
}

export default App;
