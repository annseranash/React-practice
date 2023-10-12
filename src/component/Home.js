// import React from 'react';
// import {useState,useEffect} from 'react';
// import Counter from './component/Counter';
// import {Person} from './component/Person';
// import HookCounter from './component/HookCounter';
// import HookCounter2 from './component/HookCounter2';
// import Child from './component/Child';

// const Home = () => {
//     const dataToPass="Passing Data as string from Parent to Child";
//     const parentObj={company:"Thiinkpalm",salary:20000,dept:"ETG"};
//     const [msgVisible,setMsgVisible]=useState(true);
//     const msg="Message toogled from Parent";
   
//      const [todos,setTodos]=useState([]);
//      useEffect(()=>{
//        fetch('https://jsonplaceholder.typicode.com/todos')
//        .then(response => response.json())
//        .then(todos => setTodos(todos.splice(0,10)))
//      },[]);
   
//      const [state,setState]=useState(false);
//      const [todoList,setTodoList]=useState([]);
//      const [newTask,setNewTask]=useState("");
//      const handleChange=(event)=>{
//        setNewTask(event.target.value);
//      }
//      const addTask=()=>{
//        const task={
//          id:todoList.length===0 ?1:todoList[todoList.length-1].id+1,
//          taskName:newTask
//        }
//        setTodoList([...todoList,task]);
//      }
//      const delTask=(id)=>{
//       setTodoList(todoList.filter((task,key)=>task.id!==id));
//      }
   
   
//      const [age,setAge]=useState(0)
//      const increaseAge=()=>{
//        setAge(age+1);
//      }
//      const decreaseAge=()=>{
//        setAge(age-1);
//      }
//      const age_check=18;
//      const names=["Pedro","Jake","Jessica","Mike","Dustin"];
   
//      const[inputValue,setInputValue]=useState("");
//      const handleInputChange=(event)=>{
//        setInputValue(event.target.value);
//      }
//      const[showText,setShowText]=useState(true);
   
//      const[textColor,setTextColor]=useState("green");
   
//      const isGreen=false;
//      const person_color=true;
//      const persons=[
//      {name:"Sera",age:21},
//      {name:"Sania",age:24},
//      {name:"Ayana",age:24},
//      {name:"Sara",age:26}
//    ];
//    const childFuncStyle={
//      position: "absolute",
//      top:" 30%",
//      right: "20%",
//      width:"27rem",
//      padding:"10px",
//      border:"1px solid green",
//      fontWeight:"bold",
//      fontSize:"15px"
//    }
//   return (
//     <div className="Home">
//         <User/>
//       <UserProps name="sania" age={21} email="sania@gmail.com"/>
//       <SalaryComponent salary={900000} position="Senior SDE" company="Amazon"/>
//       <SalaryComponent salary={60000} position="Product Lead" company="IBM"/>
//       {age_check>=18?<h1>OVER AGE</h1>:<h1>UNDER AGE</h1>}
//       <h1 style={{color:isGreen?"green":"red"}}>This has color</h1>
//       {names.map((name,key)=>{
//         return <h1 key={key}>{name}</h1>
//       })}
//       {persons.map((person,key)=>{
//         return <div style={{color:person_color?"blue":"violet"}}>{person.name}{person.age}</div>
//       })}
//       <Person name="Nithin" age={23}/>
//       <div className="name"><h4>Sera</h4></div>

//       <h4 style={{color:age>0?"white":"black",backgroundColor:age>0?"lime":"red"}}>{age}</h4><button onClick={increaseAge}>Increase Age</button>
//       <button onClick={decreaseAge}>Decrease Age</button><br/><br/>

//       <input type="text" onChange={handleInputChange}/>{inputValue}<br/>
//       <h1 style={{color:isGreen?"green":"red"}}>This has color</h1>
//       {isGreen && <button>This is a button</button>}
      
//       {showText && <h1>Show/Hide the Text</h1>}
//       <button onClick={()=>{
//         setShowText(!showText)
//       }}>Show/Hide Text</button>

//       <h1 style={{color:textColor}}>Hi!! My name is Sera</h1><button onClick={()=>{
//         setTextColor(textColor==="green"?"red":"green")
//       }}>Change color</button><br/><br/>

//       <HookCounter/><br/><br/>
//       <HookCounter2/><br/><br/>
      
//       <div style={{width:"20rem",height:"auto",padding:"10px 10px",border:"1px solid blue"}}>
//       <div className="addTask" >
//         <h3>Todo List</h3>
//         <input onChange={handleChange}/>
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task,key)=>{
//           return(
//             <div>
//               <ul>
//                 <li key={key}>{task.taskName}</li>
//                 <button onClick={()=>delTask(task.id)}>X</button>
//               </ul>
//             </div>
//           )
//         })}
//       </div><br/><br/>
//       </div>
      

      
//       <h1 onClick={()=>setState(!state)}>Usage of UseEffect Hook</h1>
//       {state && <Counter/>}

//       <h4>Fetch Data from API</h4>
//       {todos.map((todo,key)=>{
//         return(
//           <ul>
//             <li key={key}>{todo.title}</li>
//           </ul>
//         )
//       })}<br/>

//       <div style={childFuncStyle}>
//          <Child data={dataToPass} obj={parentObj} msgVisible={setMsgVisible} />
//          <p>Message:{msgVisible?msg:"Toogle the Message"}</p>
//       </div>
//     </div>
//   )
// }

// const User=()=>{
//     const userStylesObj={
//       position:'absolute',
//       top:"20%",
//       left:'20%',
//       width:'200px',
//       padding:'10px',
//       backgroundColor:'lime',
//       color:'white',
//     }
//     return(
//       <div style={userStylesObj}>
//         <h1 style={{color:'salmon',textDecoration:'underline'}}>Component</h1>
//         <h2>Sera</h2>
//         <h2>21</h2>
//         <h2>sera@gmail.com</h2>
//       </div>
//     )
//   }
//   const UserProps=(props)=>{
//     const propsStyles={
//       width:'200px',
//       padding:'10px',
//       backgroundColor:'#00AAFF',
//       color:'white',
//     }
//     return (
//       <div style={propsStyles}>
//         <h1>Props Usage</h1>
//         <h2>{props.name}</h2>
//         <h2>{props.age}</h2>
//         <h2>{props.email}</h2>
//       </div>
//     )
//   }
//   const SalaryComponent=(props)=>{
//     const SalaryStyles={
//       width:'200px',
//       padding:'10px',
//       backgroundColor:'#292938',
//       color:'white'
//     }
//     return(
//         <div style={SalaryStyles}>
//           <h3>{props.salary}</h3>
//           <h3>{props.position}</h3>
//           <h3>{props.company}</h3>
//         </div>
//     )
//   }

// export default Home;