import NewTodoitem from "./EndDelete";
import './Todolist.css'

function  Todolist({todoitems,onDeleteclick}){

    return(
            <div className='box'>
                { todoitems.map((item) => (
             
             <NewTodoitem
                todoitems = {item.name}
                tododate = {item.date}
                onDeleteclick ={onDeleteclick}>

             </NewTodoitem>

      ))}
      </div>  
    );
}

export default Todolist