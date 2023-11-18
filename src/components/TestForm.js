import React, {useState} from 'react'

export default function TestForm(props) {

    const [text, setText] = useState("Enter text here");


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
