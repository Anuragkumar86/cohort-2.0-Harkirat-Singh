import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputValue] = useState("");

  let sum = 0;
  for(let i=0; i<= inputvalue; i++){
    sum = sum+i;
  }


  return (
    <div>
      <input type='text' placeholder='Sum from 1 to n' onChange={function(e){
        setInputValue(e.target.value);
      }}></input><br/>
      <h4>Sum from 1 to {inputvalue} is: {sum}</h4>
      <button onClick={function(){
        setCounter(counter + 1);
      }}>Counter {counter}</button>
    </div>
  );
  
}

export default App;
