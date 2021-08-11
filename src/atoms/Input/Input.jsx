import './Input.css';

export const Input = ({className, onChange}) => {
    return (
        <input onChange={onChange} atype="text" className={className}></input>
    )
}