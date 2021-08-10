import './Button.css';

export const Button = ({children, type}) => {

    return (
        <button className={`btn ${type}`}>{children}</button>
    )
}