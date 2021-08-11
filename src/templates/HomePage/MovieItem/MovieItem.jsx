import './MovieItem.css';
import { Button } from 'atoms/Button/Button';
import { ButtonPanel } from 'templates/HomePage/MovieItem/ButtonPanel/ButtonPanel';
import { InfoPanel } from './InfoPanel/InfoPanel';

export const MovieItem = ({ img, title, year, genre, actors, director }) => (
        <li className='movie-item'>
            <div className="movie-item__wrapper">
                <img alt ={title}className='movie-item__img' src={img}></img>
                <h2 className='movie-item__title'>{title}</h2>
                <span className="movie-item__year">{year}</span>
                <InfoPanel>
                    <span className="movie-item__genre">Genre: {genre.reduce((acc, val) => { return acc +  val + ', ' }, '')}</span>
                    <span className="movie-item__director">Director: {director.reduce((acc, val) => { return acc + val }, '')}</span>
                    <span className="movie-item__actors">Actor: {actors.reduce((acc, val) => { return acc + val + ', ' }, '')}</span>
                </InfoPanel>
                <ButtonPanel>
                    <Button type='btn--fav'>★</Button>
                    <Button>Button</Button>
                </ButtonPanel>
            </div>
        </li>
)