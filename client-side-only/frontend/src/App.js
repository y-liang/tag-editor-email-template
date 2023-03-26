import { useState } from 'react';
import './App.css';
import Main from './pages/Main';

function App() {

  const [type, setType] = useState('preview');

  const handleSelectChange = (e) => {
    setType(e.target.value);
  };


  const [hasJson, setHasJson] = useState();
  const handleCheckboxChange = (e) => {
    setHasJson(e.target.checked);
  };


  const [radio, setRadio] = useState('utilize');

  const handleRadioChange = (val) => {
    setRadio(val);
  };


  return (
    <div className='App'>

      <label>
        Pick a template to get started:
        <select value={type} onChange={handleSelectChange}>
          <option value='inventory'>inventory external</option>
          <option value='midweek'>midweek cut</option>
          <option value='preview'>preview</option>
        </select>
      </label>

      <label>
        Add a data table with json
        <input type="checkbox" onChange={handleCheckboxChange} />
      </label>

      <div onChange={e => handleRadioChange(e.target.value)}  >
        <label>
          <input type="radio" name="template" value="utilize" defaultChecked />
          utilize example template
        </label>
        <label>
          <input type="radio" name="template" value="upload" />
          upload a template
        </label>
      </div>



      <Main type={type} isExample={radio == "utilize"} hasJson={hasJson} />
    </div>
  );
}

export default App;
