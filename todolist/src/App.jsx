import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Todo from "./comp/toodo";
import Todolist from "./comp/Todolist";

function App() {
  const [todolist, settodolist] = useState([])
  const handleitem =(namee,datee)=>{
    console.log(`${namee} ${datee}`);
    const newtodo = [...todolist,
    {name: namee ,date: datee},
    ];
    settodolist(newtodo);
  };


  const handledeleteitem = (todoitemname) => {
    const newtodolist = todolist.filter((item) => item.name !== todoitemname);
    settodolist(newtodolist);
  };

  return (
     <>
     <div className="p-3 text-center  rounded-3 align-items-center justify-content-center ">
  <h1 className="text-body-emphasis ">TODO LIST</h1>
  <p className="lead">
  A to-do list is a list of items that need to be completed.
  </p>
     </div>

  <Todo onNewitem={handleitem} />
   
   <Todolist  todoitems={todolist} onDeleteclick ={handledeleteitem}/>
  
   </>
   
  )
}

export default App
