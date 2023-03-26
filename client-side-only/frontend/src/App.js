import { useState } from 'react';
import './App.css';
import Right from './pages/Right';
// import Cleanup from './pages/Cleanup';
import Left from './pages/Left';

function App() {

  const [type, setType] = useState('demand');

  const handleSelectChange = (e) => {
    setType(e.target.value);
  };


  const [radio, setRadio] = useState();

  const handleRadioChange = (val) => {
    setRadio(val);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()


  // }


  return (
    <div className='App'>
      {/* <Cleanup /> */}

      <label>
        Pick a template to get started:
        <select value={type} onChange={handleSelectChange}>
          <option value='inventory'>inventory external</option>
          <option value='midweek'>midweek cut</option>
          <option value='demand'>demand newsletter</option>
          <option value='supply'>supply newsletter</option>
          <option value='preview'>preview</option>
        </select>
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



      <div className='flex'>
        <Left type={type} />
        <Right />
      </div>
    </div>
  );
}

export default App;
