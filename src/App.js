// app.js should be clean so we have created components

import React ,{ useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textfrom from './components/Textfrom';
import Alert from './components/Alert';

// this is a function component
function App() {
  const [Mode, setMode] = useState('light') // whether dark mode is enabled or not
  const [alert,setAlert] = useState(null)

  const showAlert = (message, type)=>{
        setAlert({
          msg : message,
          type : type
  })
  setTimeout(() => {
    setAlert(null)
  }, 3000);  }

 const toggleMode = ()=>{
     if(Mode==='light'){
       setMode('dark')
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
       showAlert("Dark mode has been enabled","success")
       document.title = "textutils - Darkmode"
     }else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
       showAlert("Light mode has been enabled","success")
       document.title = "textutils - Lightmode"
     }
  }
  return (
    // this is a jsx fragment = to return multiple elements
    <> 
    {/* passing title in navbar */}
    
<Navbar title="textutilsss" Mode={Mode}  toggleMode={toggleMode} />
{/* <Navbar  /> */}
<Alert alert={alert}/>
<div className="container my-6"> 
<Textfrom showAlert={showAlert} heading="Enter Your text to Analyze"/>
<About/></div>
    </>
  );
}

export default App;
