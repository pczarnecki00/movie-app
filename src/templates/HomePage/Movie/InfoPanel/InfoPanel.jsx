import './InfoPanel.css'

export const InfoPanel = ({ children }) => {

    return (
        <div className="movie-item__info">
            {children}
        </div>
    )
}