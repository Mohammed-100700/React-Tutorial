import './App.css'
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText='About TextUtils' />

      <div className="container my-3">
        <TestForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
