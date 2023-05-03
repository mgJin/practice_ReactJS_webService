import { useState } from "react";

function App_todoList(){
  const [toDos,setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const onChange = (event)=>setToDo(event.target.value);
  const onSubmit = (event)=> {
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    setToDo("");
    setToDos((currentArray)=>[toDo,...currentArray]);
  }
  console.log(toDos);
  return(
    <div>
      <h1>My To Dos ({toDos.length!==0&&toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do"/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
       {toDos.map((item,index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default todo;