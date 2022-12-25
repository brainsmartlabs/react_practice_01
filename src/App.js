import { useEffect, useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [state, setState] = useState({
    darkMode: false,
    alert: null
  });



  useEffect(() => {
    if (state.darkMode) {
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }
  }, [state.darkMode]);

  function showAlert (message, type) {
    
  }

  function toggleMode(e) {
    if (state.darkMode) {
      setState(prev => ({
        ...prev,
        darkMode: false
      }));
    } else {
      setState(prev => ({
        ...prev,
        darkMode: true
      }));
    }
  }
  return (
    <>
      <Navbar title={'Text Utils'} aboutText="About Text Utils" darkMode={state.darkMode} toggleMode={toggleMode} />
      <Alerts alert="This is an Alert" />
      <div className='container'>
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
