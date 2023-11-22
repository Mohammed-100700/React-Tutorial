import React, { useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>
            <Route exact path="/" element={<TestForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/>
            <Route exact path="/About" element={<About />} />
          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;
