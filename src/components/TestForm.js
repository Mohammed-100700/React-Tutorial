import React, {useState} from 'react'

export default function TestForm(props) {

    const [text, setText] = useState("");
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
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
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCapitalizedFirstLetter = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }

    const alternateCasing = () => {
        const alternatedText = text
        .split('')
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("");
        setText(alternatedText);     
      };


    return (
        <>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "dark" : "light"}`} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCapitalizedFirstLetter}>Capitalized first letter</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={alternateCasing}>Alternate first letter</button>
        </div>

        <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : "Write something"}</p>
        </div>
        </>
    )
}
