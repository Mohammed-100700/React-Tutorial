import React, {useState} from 'react'

export default function TestForm(props) {

    const [text, setText] = useState("");
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleClear = () => {
        setText("")
    }


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
        </div>
    )
}
