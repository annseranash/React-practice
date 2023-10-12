import React from 'react'

const Child = (props) => {
    const childStyle={
        width:"25rem",
        padding:"10px",
        border:"1px solid blue",
        fontWeight:"bold",
        fontSize:"15px"
    }
    const childStyleObj={
        width:"25rem",
        padding:"10px",
        border:"1px solid purple",
        fontWeight:"bold",
        fontSize:"15px"
    }

    const toggle=()=>{
        props.msgVisible((prev)=>!prev);
    } 
    
  return (
    <div>
        <div style={childStyle}>
        <h3 style={{textTransform:"uppercase",textDecoration:"underline"}}>Parent to Child</h3>
        <p>Data from Parent:</p>
        <span style={{color:"purple"}}>{props.data}</span>
        </div>

        <div  style={childStyleObj}>
            <h3 style={{textTransform:"uppercase",textDecoration:"underline"}}>Passing Data as Object</h3>
            <span>Company: {props.obj.company}</span>
            <span> Salary: {props.obj.salary}</span>
            <span> Dept: {props.obj.dept}</span>
        </div>

            <h3 style={{textDecoration:"underline"}}>Passing Data as Function</h3>
            <button onClick={toggle}>Toogle Msg</button>
    </div>
  )
}

export default Child