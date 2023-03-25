import React, { useState, useRef } from "react";

const Inbox = (props) => {

  const [newTask,setTask] = useState(false);
  const title = useRef(null);
  const date = useRef(null);

  const onAddHandler=(event)=>{
    event.preventDefault();
    props.append({
      number:props.list.length+1, 
      title:title.current.value,
      date:new Date(date.current.value)
    })
  }
 

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>{setTask(true)}} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={title}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={onAddHandler}>
              Add Task
            </button>
            <button className="new" onClick={()=>{setTask(false)}}>
              Cancel
            </button>
            <input
              type="date"
              ref={date}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
