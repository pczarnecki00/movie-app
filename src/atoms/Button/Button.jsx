import './Button.css';

export const Button = ({ children, color, ...props}) => {

    return (
        <button className={`btn btn--{color}`} {...props}>{children}</button>
    )
}