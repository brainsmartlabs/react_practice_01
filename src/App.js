import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
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

  function showAlert(message, type) {
    setState(prev => ({
      ...prev,
      alert: { msg: message, type: type }
    }));

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        alert: null
      }))
    }, 1000);

  }

  function toggleMode(e) {
    if (state.darkMode) {
      setState(prev => ({
        ...prev,
        darkMode: false,
      }));
      //showAlert("Light Mode has been Enabled", "success");
    } else {
      setState(prev => ({
        ...prev,
        darkMode: true,
      }));
      //showAlert("Dark Mode has been Enabled", "success");
    }
  }
  return (
    <>
      <Navbar title={'Text Utils'} aboutText="About Text Utils" darkMode={state.darkMode} toggleMode={toggleMode} />
      <Alerts alert={state.alert} />
      <div className='container'>

        <Routes>

          <Route path='/' element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} />} />
          <Route path='/about' element={<About darkMode={state.darkMode} />} />

        </Routes>

      </div>

    </>
  );
}

export default App;
