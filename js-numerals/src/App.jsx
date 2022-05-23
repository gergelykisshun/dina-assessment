import React, { useState } from 'react';
import './App.css';
import phrasify from './logic/phrasify';

const App = () => {

  const [num, setNum] = useState('');

  const inputHandler = (e) => {
    if(num.length < 8){
      setNum(e.target.value)
    } else {
      setNum(e.target.value.slice(0, 8))
    }
  }

  return (
    <section className='wrapper'>
      <div className='content'>
        <input className='input-style' type="text" onChange={inputHandler} value={num}/>
        <h2>{phrasify(num)}</h2>
      </div> 
    </section>
  )
}

export default App