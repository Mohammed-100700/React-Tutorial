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
        const shouldClear = window.confirm("Are you sure you want to clear the text?");

        if(shouldClear) {
            setText("");
        }
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }


    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-dark mx-3" onClick={handleLoClick}>Convert to Uppercase</button>
            <button className="btn btn-danger" onClick={handleClear}>Clear</button>
        </div>

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
