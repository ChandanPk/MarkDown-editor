import { useState, useContext } from 'react'
import { InputContext } from '../contexts/inputContext'

const InputField = () => {

    const [input, setInput] = useContext(InputContext);
    

    const handleInput = (e)=> {
        setInput(e.target.value);
    }

    return (
        <div>     
            <textarea className="input-text-area" value={input} onChange={(e)=> handleInput(e)}></textarea>
        </div>
    );
}

export default InputField;