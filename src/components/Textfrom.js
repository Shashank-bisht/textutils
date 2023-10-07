// import { useState } from "react";
import React, {useState}  from "react";


export default function Textfrom(props) {
  const handleupclick = ()=>{
    console.log("uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")
  }
  const handleloclick = ()=>{
    // console.log("uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }
  const handleCopy = ()=>{
    // console.log("uppercase was clicked")
    let text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("copied to clipboard","success")
  }
  const handleonchange = (event)=>{
    console.log("on changed")
    setText(event.target.value)
  }
  const handleextraspace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extraspace removed","success")
  }
  // array destructuring 
  // here default value of text is ""
    const [text, setText] = useState("");
  // text = "fkdsf" wrong way to change state
  // setText = ("new text") // correct way
  return (<>
    <div>
      <div className="container" >
  <div className="mb-3">
  <h1>{props.heading} </h1>
  <br />
  <h5><label htmlFor="myBox" className="form-label "  >Write here</label></h5>
  
  <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} rows="8" style={{backgroundColor:props.Mode==='dark'?'white':'white',color:props.Mode==='black'?'light':'black'}}></textarea>

</div>
<button className="btn btn-primary mx-3" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleloclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-3" onClick={handleextraspace}>Removes Extra space</button>
    </div>
    </div>
    <div className="container" style={{color:props.Mode==='dark'?'light':'dark'}}><h2>Your text Summery</h2>
    <p>{text===""?0:text.trim().split(" ").length} words and {text.trim().length} characters</p>
    <p>{0.08*(text.trim().split(" ").length)} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box to preview here"}</p>
    </div>
    </>
  )
}
