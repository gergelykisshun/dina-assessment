import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState('');


  const phraseNumber = (num) => {
    return num.toUpperCase();
  };
  return (
    <section className='wrapper'>
      <div className='content'>
        <input type="text" onChange={(e) => setNum(e.target.value)} value={num}/>
        <h2>{phraseNumber(num)}</h2>
      </div> 
    </section>
  )
}

export default App