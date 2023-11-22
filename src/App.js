import { useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className="container my-3">
        <TestForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
