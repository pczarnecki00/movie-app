import './MoviesList.css';

export const MoviesList = ({children}) => {
    return (
        <ul className="movies-list">{children}</ul>
    )
}