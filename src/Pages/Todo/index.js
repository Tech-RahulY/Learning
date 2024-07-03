import React, {useEffect, useState}   from "react";
import axios from "axios";
import TodoList from "./Components/TodoList";

const Todo = () => {
    const [task,setTask]= useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            console.log(response.data)
            setTask(response.data.slice(0,20));

        })
        .catch(error => {
            console.log(error.message);
        });
    },[]);

    const completedTask = task.filter(t => {
        return t.completed;
    });
    const notCompletedTask = task.filter(t => {
        return !t.completed;
    });

    const onDragOver = (e) => {e.preventDefault();}
    const onDrop = (e,val) => {
       var id = e.dataTransfer.getData("text/id");
       console.log(id);
       var tasks = task.map( t => {
            if( t.id == id)
            {
                console.log(t.id + "" + val );
                t.completed = val;
            }
            return t;
       });
       console.log(tasks);
        setTask(tasks);
    }

    return (
        <div className="container">
         <h1>TODO APP</h1>
         <div className="row">
          <div className="col-lg-6" onDragOver={(e) => onDragOver(e)} onDrop ={(e) => onDrop(e,false)} >
           <h2>Todo </h2>
            <TodoList className="badge rounded-pill bg-primary" task={notCompletedTask}/>
          </div>
          <div onDragOver={(e) => onDragOver(e)} onDrop ={(e) => onDrop(e,true)} className="col-lg-6">
           <h2>Completed </h2>
            <TodoList className="badge rounded-pill bg-success" task={completedTask}/>
          </div>
         </div>
        </div>
    );
}

export default Todo;