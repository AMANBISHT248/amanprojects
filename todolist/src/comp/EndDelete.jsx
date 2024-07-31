
function  NewTodoitem({todoitems,tododate,onDeleteclick}){

    return(
          
                
        <div className="row kg-row head box2 ">
        <div className="col-3">{todoitems}</div>
        <div className="col-2">{tododate}</div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteclick(todoitems)}
          >
            Delete
          </button>
        </div>
      </div>

      )};



export default  NewTodoitem