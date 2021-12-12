import React,{useState} from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        // console.log("uppercase done"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        // console.log("lowercase done"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick=()=>{
        // console.log("clear done"+text);
        let newText='';
        setText(newText);
    }

    
    const handleOnChange=(event)=>{
        // console.log("onchange done");
        setText(event.target.value);

    }

    const [text,setText] = useState("");

    return (
        <>
        <div className="container">
         
<div className="mb-3"><br />
 <h1>Text Analyzer</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>  
<button className="btn-primary mx-2" onClick={handleUpClick}>Convert UpperCase</button>
<button className="btn-primary mx-2" onClick={handleLoClick}>Convert LowerCase</button>
<button className="btn-secondary mx-2" onClick={handleClearClick}>Clear Text</button>

{/* <button className="btn-primary">Reset</button> */}



        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}
