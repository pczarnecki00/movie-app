import { SearchInput } from 'molecules/SearchInput/SearchInput';
import { Header } from 'organisms/Header/Header';
import { Container } from 'atoms/Container/Container';
import { Heading } from 'atoms/Heading/Heading';
import { HomePage } from 'templates/HomePage/HomePage';
import { MoviesList } from 'templates/HomePage/MoviesList/MoviesList';
import { MovieItem } from 'templates/HomePage/Movie/MovieItem';
import { movies } from './moviedata';

import './App.css';



function App() {
  return (
    <div className="App">
      <HomePage>
        <Header>
          <Container style={'flex-space'}>
            <Heading>Best movie site</Heading>
            <SearchInput />
          </Container>

        </Header>
        <Container>
          <MoviesList>
          {movies.map( movie => 
            <MovieItem key={movie.title} img={movie.info.image_url.img} title={movie.title} year={movie.year} genre={movie.info.genres} actors={movie.info.actors} director={movie.info.directors}></MovieItem>
            )}
          </MoviesList>
        </Container>
      </HomePage>
    </div>
  );
}

export default App;
