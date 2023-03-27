import { useState } from 'react';
import './App.css';
import Main from './pages/Main';

function App() {

  const [option, setOption] = useState(0);


  return (
    <div className='App'>
      <h1>Email Template Tag Editor</h1>


      <div onChange={e => setOption(e.target.value)}  >
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
      </div>

      <Main option={option} />
    </div >
  );
}

export default App;
