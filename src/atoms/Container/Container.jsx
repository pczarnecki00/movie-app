import './Container.css';

export const Container = ({children, type}) => {

    return (
        <div className={`container ${type ? type : '' }`}>{children}</div>
    )
}