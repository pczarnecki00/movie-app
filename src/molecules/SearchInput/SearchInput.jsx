import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'atoms/Button/Button';
import { Input } from 'atoms/Input/Input';

export const SearchInput = ({ onChange, onSubmit }) => {
     return (
         <form onSubmit={onSubmit}className="input-wrapper">
             <Input onChange={onChange} className="search-input" />
             <Button color="search" type="submit"><FontAwesomeIcon className="search-icon" icon={faSearch}/></Button>
         </form>
     )
}

