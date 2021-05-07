import { useContext } from 'react';
import { InputContext } from '../contexts/inputContext'
// import {Remarkable} from 'remarkable'
import ReactMarkdown from 'react-markdown'

const MarkdownSanitized = () => {

    const [input, setInput] = useContext(InputContext);

    return (
        <div>     
            <div className="output-text-area"> 
            <ReactMarkdown>{input}</ReactMarkdown>
            {/* {md.render(input)} */}
            {/* <textarea className="text-area" value={input} ></textarea> */}
            </div> 
        </div>
    );
}

export default MarkdownSanitized;