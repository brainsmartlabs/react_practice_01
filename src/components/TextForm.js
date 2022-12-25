import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("");

    function handleUpClick() {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    function handleLowClick(event) {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }

    function handleClearClick(event) {
        setText('');
        props.showAlert("Text Box Cleared", "success");
    }

    function handleCopyClick(event) {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text to clipboard", "success");
    }

    function handleExtraSpaces(){
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className='container my-3'>
                <h1>Your Text Summary:</h1>
                <p>{text.split(" ").length} words & {text.length} charecters</p>
                <p> Will take {0.5 * text.split(" ").length} Seconds to read</p>
                <h3> Preview: </h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm