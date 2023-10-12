import React,{useState} from 'react'

function HookCounter2() {
    const [name,setName]=useState({firstName:"",lastName:""});
    const hookStyle={
        width:"30rem",
        padding:"20px 20px",
        border:"1px solid purple",
    }
  return (
    <div style={hookStyle}>
        <h2 style={{textDecoration:"underline"}}>UseState with object </h2>
        <form>
            <input type="text" value={name.firstName} onChange={event=>setName({...name,firstName:event.target.value})}/><h2>Firstname:{name.firstName}</h2>
            <input type="text" value={name.lastName} onChange={event=>setName({...name,lastName:event.target.value})}/><h2>Lastname:{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default HookCounter2;