import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import Counter from './component/Counter';
import {Person} from './component/Person';
import HookCounter from './component/HookCounter';
import HookCounter2 from './component/HookCounter2';
import Child from './component/Child';
import Axios from 'axios';

function App() {
  const [fetchApiData,setFetchApiData]=useState([]);
  const [catFact,setCatFact]=useState("");
  const [searchName,setSearchName]=useState("");
  const [predictedData,setPredictedData]=useState(null);
  const [predictExcuse,setPredictExcuse]=useState("");
  const fetchInfo=()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setFetchApiData(res.data);
    })
  }
  useEffect(()=>{
    fetchInfo();
  },[])

  const fetchCatFact=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    })
  }
  useEffect(()=>{
    fetchCatFact();
  },[])

 const fetchData=()=>{
  Axios.get(`https://api.agify.io/?name=${searchName}`).then((res)=>{
    setPredictedData(res.data);
  })
 }
 const fetchExcuse=(excuse)=>{
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=>{
  setPredictExcuse(res.data[0])
  })
 }

 const dataToPass="Passing Data as string from Parent to Child";
 const parentObj={company:"Thiinkpalm",salary:20000,dept:"ETG"};
 const [msgVisible,setMsgVisible]=useState(true);
 const msg="Message toogled from Parent";

  const [state,setState]=useState(false);
  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");
  const handleChange=(event)=>{
    setNewTask(event.target.value);
  }
  const addTask=()=>{
    const task={
      id:todoList.length===0 ?1:todoList[todoList.length-1].id+1,
      taskName:newTask
    }
    setTodoList([...todoList,task]);
  }
  const delTask=(id)=>{
   setTodoList(todoList.filter((task,key)=>task.id!==id));
  }

  const [age,setAge]=useState(0)
  const increaseAge=()=>{
    setAge(age+1);
  }
  const decreaseAge=()=>{
    setAge(age-1);
  }
  const age_check=18;
  const names=["Pedro","Jake","Jessica","Mike","Dustin"];

  const[inputValue,setInputValue]=useState("");
  const handleInputChange=(event)=>{
    setInputValue(event.target.value);
  }
  const[showText,setShowText]=useState(true);

  const[textColor,setTextColor]=useState("green");

  const isGreen=false;
  const person_color=true;
  const persons=[
  {name:"Sera",age:21},
  {name:"Sania",age:24},
  {name:"Ayana",age:24},
  {name:"Sara",age:26}
];
const childFuncStyle={
  position: "absolute",
  top:" 30%",
  right: "20%",
  width:"27rem",
  padding:"10px",
  border:"1px solid green",
  fontWeight:"bold",
  fontSize:"15px"
}

  return(
    <div className="App">
      <GetNameComponent/>
      <User/>
      <UserProps name="sania" age={21} email="sania@gmail.com"/>
      <SalaryComponent salary={900000} position="Senior SDE" company="Amazon"/>
      <SalaryComponent salary={60000} position="Product Lead" company="IBM"/>
      {age_check>=18?<h1>OVER AGE</h1>:<h1>UNDER AGE</h1>}
      <h1 style={{color:isGreen?"green":"red"}}>This has color</h1>
      {names.map((name,key)=>{
        return <h1 key={key}>{name}</h1>
      })}
      {persons.map((person,key)=>{
        return <div style={{color:person_color?"blue":"violet"}}>{person.name}{person.age}</div>
      })}
      <Person name="Nithin" age={23}/>
      <div className="name"><h4>Sera</h4></div>

      <h4 style={{color:age>0?"white":"black",backgroundColor:age>0?"lime":"red"}}>{age}</h4><button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button><br/><br/>

      <input type="text" onChange={handleInputChange}/>{inputValue}<br/>
      <h1 style={{color:isGreen?"green":"red"}}>This has color</h1>
      {isGreen && <button>This is a button</button>}
      
      {showText && <h1>Show/Hide the Text</h1>}
      <button onClick={()=>{
        setShowText(!showText)
      }}>Show/Hide Text</button>

      <h1 style={{color:textColor}}>Hi!! My name is Sera</h1><button onClick={()=>{
        setTextColor(textColor==="green"?"red":"green")
      }}>Change color</button><br/><br/>

      <HookCounter/><br/><br/>
      <HookCounter2/><br/><br/>
      
      <div style={{width:"20rem",height:"auto",padding:"10px 10px",border:"1px solid blue"}}>
      <div className="addTask" >
        <h3>Todo List</h3>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      
      <div className="list">
        {todoList.map((task,key)=>{
          return(
            <div>
              <ul>
                <li key={key}>{task.taskName}</li>
                <button onClick={()=>delTask(task.id)}>X</button>
              </ul>
            </div>
          )
        })}
      </div><br/><br/>
      </div>
      

      <h1 onClick={()=>setState(!state)}>Usage of UseEffect Hook</h1>
      {state && <Counter/>}

     <div className="API calling">
        <h4>Fetch Data from API</h4>
        {fetchApiData.map((data)=>{
          return(
            <p style={{
              width: "12rem",
              backgroundColor: "#35D841",
              padding: 3,
              borderRadius: 10,
              display:"flex",
              justifyContent:"center",
              marginBlock: 10,
            }}>{data.name}</p>
          )
        })}
     </div><br/>

      <div style={childFuncStyle}>
         <Child data={dataToPass} obj={parentObj} msgVisible={setMsgVisible} />
         <p>Message:{msgVisible?msg:"Toogle the Message"}</p>
      </div>
     
     <div className="Api Calling" style={{display:"flex",position:"relative",left: "20%",marginTop:" -280px"}}>
      <div style={{width:"20rem",height:"auto",padding:"10px 10px",border:"1px solid blue"}}>
        <button onClick={fetchCatFact}>Generate Cat Fact Api</button>
        <p>{catFact}</p>
      </div>

      <div style={{width:"20rem",height:"auto",padding:"10px 10px",border:"1px solid blue"}}>
           <input placeholder="Type Name" onChange={(event)=>setSearchName(event.target.value)}/>
           <button onClick={fetchData}>Predict Age</button>
           <h4> Name:{predictedData?.name}</h4>
           <h4>Predicted Age:{predictedData?.age}</h4>
           <h4>Predicted count:{predictedData?.count}</h4>
      </div>

      <div style={{width:"20rem",height:"auto",padding:"10px 10px",border:"1px solid blue"}}>
          <h3>Generate an Excuse</h3>
          <button onClick={()=>fetchExcuse("party")}>Party</button>
          <button onClick={()=>fetchExcuse("family")}>Family</button>
          <button onClick={()=>fetchExcuse("office")}>Office</button>
          <p>{predictExcuse.category}:{predictExcuse.excuse}</p>   
      </div>

     </div>

        <div></div>
    </div>
  ) 
}

const GetNameComponent=()=>{
  return <h1 style={{backgroundColor:'salmon',color:'white'}}>React Component</h1>     // React Component
  // Component should start with capital letter(reusable)
}
const User=()=>{
  const userStylesObj={
    position:'absolute',
    top:"20%",
    left:'20%',
    width:'200px',
    padding:'10px',
    backgroundColor:'lime',
    color:'white',
  }
  return(
    <div style={userStylesObj}>
      <h1 style={{color:'salmon',textDecoration:'underline'}}>Component</h1>
      <h2>Sera</h2>
      <h2>21</h2>
      <h2>sera@gmail.com</h2>
    </div>
  )
}
const UserProps=(props)=>{
  const propsStyles={
    width:'200px',
    padding:'10px',
    backgroundColor:'#00AAFF',
    color:'white',
  }
  return (
    <div style={propsStyles}>
      <h1>Props Usage</h1>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}
const SalaryComponent=(props)=>{
  const SalaryStyles={
    width:'200px',
    padding:'10px',
    backgroundColor:'#292938',
    color:'white'
  }
  return(
      <div style={SalaryStyles}>
        <h3>{props.salary}</h3>
        <h3>{props.position}</h3>
        <h3>{props.company}</h3>
      </div>
  )
}
export default App;

