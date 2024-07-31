import { useState } from "react";
import './todo.css'


function Todo({ onNewitem }) {
  const [Name, setName] = useState();
  const [Date,setDate]  = useState();

  const handlename = (event)=>{
    
    setName(event.target.value);
  };

  const handledate = (event)=>{
    setDate(event.target.value);
  };

  const additemclick = () =>{
    {Name.length > 0 && onNewitem(Name, Date) , console.log("aaaaa");};
    setName("");
    setDate("");
  };


  return (
    <>
      <header className=" align-items-center justify-content-center  ">

        <div className=" head p-3 mb-2 w-75  ">

     
          <div className="container">
            <div className="d-flex flex-wrap  justify-content-lg-start">
              <form
                className="w-50 d-flex justify-content-center "
                role="search"
              >
                <input
                  className="form-control search"
                  type="search"
                  placeholder="Go Head.."
                  aria-label="Search"
                  value={Name}
                  onChange={handlename}
                ></input>

            <div className="col-5 ">
          <input type="date" className="fuldate"   value={Date} onChange={handledate}/>
        </div>
              </form>
              <div className="text-end">
                <button type="button" className="btn btn-outline-dark  justify-content-center " 
                onClick={additemclick}>
                  ADD
                </button>
                {/* <button type="button"class="btn btn-outline-dark ">
      Delete
    </button> */}
              </div>
            </div>
          </div>



          </div>
      
     

      </header>


    </>
  );
}


export default Todo
