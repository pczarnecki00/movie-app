import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'atoms/Button/Button';
import { Input } from 'atoms/Input/Input';

export const SearchInput = () => {
     return (
         <form className="input-wrapper">
             <Input className="search-input" />
             <Button type='btn--search'><FontAwesomeIcon className='search-icon' icon={faSearch}/></Button>
         </form>
     )
}