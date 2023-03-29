import { useState } from 'react';
import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Main from './pages/Main';
import OptionCards from './pages/OptionCards';

function App() {

  // const [option, setOption] = useState(0);


  const [selectedOption, setSelectedOption] = useState(0); // index 1 base


  return (
    <div className='App bg-gradient-to-r from-blue-50 to-cyan-50'>
      <div className='wrapper'>
        <Header />
        <OptionCards selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <Main option={selectedOption} />
        <Footer />
      </div>
    </div >
  );
}

export default App;
