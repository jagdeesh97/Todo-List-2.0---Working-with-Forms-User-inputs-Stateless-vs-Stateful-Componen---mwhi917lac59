import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();

  let filterList=props.list.filter((obj)=>{
        if(obj.date.getFullYear() !=date.getFullYear()){
          return false;
        }
        if(obj.date.getMonth() !=date.getMonth()){
          return false;
        }
        if(obj.date.getDate() !=date.getDate()){
          return false;
        }
            return true;
  })
  
  return (
    <div id="today-list">
      <ListRender list={filterList} />
    </div>
  );
};

export default Today;
