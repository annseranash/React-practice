import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]=useState(0);
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1);
        }
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increase</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounter;