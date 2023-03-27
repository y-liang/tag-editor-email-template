import { useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';
import OptionCards from './pages/OptionCards';

function App() {

  // const [option, setOption] = useState(0);


  const [selectedOption, setSelectedOption] = useState(0); // index 1 base


  return (
    <div className='App'>
      <Header />


      <OptionCards selectedOption={selectedOption} setSelectedOption={setSelectedOption} />


      {/* <div onChange={e => setOption(e.target.value)}  >
        <label>
          <input type="radio" name="template" value={0} defaultChecked />
          Modify Template
          <span className='info'>Recommended</span>
        </label>
        <label>
          <input type="radio" name="template" value={1} aria-describedby="rules" />
          Upload a Template
          <div role="tooltip" id="rules">
            Experimental, proceed with caution.
          </div>
        </label>
        <label>
          <input type="radio" name="template" value={2} defaultChecked />
          Generate Data Table from JSON Array
        </label>
      </div> */}

      <Main option={selectedOption} />
    </div >
  );
}

export default App;
