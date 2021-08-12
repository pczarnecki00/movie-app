import { Button } from 'atoms/Button/Button';
import { ButtonPanel } from 'templates/HomePage/MovieItem/ButtonPanel/ButtonPanel';
import { InfoPanel } from './InfoPanel/InfoPanel';

import noImage from 'assets/noimage.jpg'
import './MovieItem.css';

export const MovieItem = ({ Poster, Title, Year, Type, buttonClick, favStyle}) => (
        <li className='movie-item'>
            <div className="movie-item__wrapper">
                { Poster !== "N/A" ? <img alt ={Title} className='movie-item__img' src={Poster}/> : <img src={noImage} alt="no poster"></img>}
    
                <h2 className='movie-item__title'>{Title}</h2>
                <span className="movie-item__year">{Year}</span>
                <InfoPanel>
                    <span className="movie-item__genre">{Type}</span>
                </InfoPanel>
                <ButtonPanel>
                    <Button onClick={buttonClick} color={favStyle}>★</Button>
                    <Button>Button</Button>
                </ButtonPanel>
            </div>
        </li>
)