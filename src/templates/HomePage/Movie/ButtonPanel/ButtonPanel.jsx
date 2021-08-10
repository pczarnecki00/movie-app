import './ButtonPanel.css'; 

export const ButtonPanel = ({children}) => {

    return (
        <div className="btn-panel">
            {children}
        </div>
    )
}