import './Input.css';

export const Input = ({className}) => {
    const handleChange = (e) =>{
        console.log();
    }
    return (
        <input onChange={(e)=> {handleChange(e.target.value)}} atype="text" className={className}></input>
    )
}