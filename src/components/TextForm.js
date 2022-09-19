import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked."+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase !" , "success");
    }

    const handleLoClick = () =>{
        console.log("Uppercase was clicked."+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase !" , "success");
    }
    const handleOnChange = (event) =>{
        console.log("On Change was clicked.");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied !" , "success");
        document.getSelection().removeAllRanges();
    }

    const handleCls = () =>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared !" , "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All the extra spaces have been removed !" , "success");
    }
    const[text, setText] = useState(''); 

    return (
    <>
    <div className="container" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <div className="form-group">
            <label htmlFor="myBox"><h1>{props.heading}</h1></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode==='light' ? 'white' : 'white'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handleCls}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").filter((ele)=>{ return ele.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ")} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something to preview your text" }</p>
    </div>
    </>
  )
}