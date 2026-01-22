import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [value,setValue]=useState("");
    function append(b){
        setValue(prev=>prev+b)
    }
    function clear(){
        setValue("")
    }
    function equal(){
        try {
           setValue(eval(value)) 
        } catch (error) {
          setValue("Error")  
        }
        
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <input className='run' type='text' value={value}></input>
        <div className='cal'>
            <button onClick={()=>append('+')}>+</button>
            <button onClick={()=>append('-')}>-</button>
            <button onClick={()=>append('*')}>*</button>
            <button onClick={()=>append('/')}>/</button>
            <button onClick={()=>append('1')}>1</button>
            <button onClick={()=>append('2')}>2</button>
            <button onClick={()=>append('3')}>3</button>
            <button onClick={()=>append('4')}>4</button>
            <button onClick={()=>append('5')}>5</button>
            <button onClick={()=>append('6')}>6</button>
            <button onClick={()=>append('7')}>7</button>
            <button onClick={()=>append('8')}>8</button>
            <button onClick={()=>append('9')}>9</button>
            <button onClick={()=>append('0')}>0</button>
            <button onClick={()=>clear()}>C</button>
            

        </div>
        <button className='last' onClick={()=>equal()}>=</button>
        
      </header>
    </div>
  );
}

export default App;
