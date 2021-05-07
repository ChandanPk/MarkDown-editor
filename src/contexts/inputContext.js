import { createContext, useState } from "react";
// import { propTypes } from "react-markdown";

export const InputContext = createContext();


export const InputProvider = props => {

    const [input, setInput] = useState();


    return (
        <InputContext.Provider value={[input, setInput]}>
            {props.children}
        </InputContext.Provider>
    );
}