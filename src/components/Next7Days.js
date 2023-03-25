import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();

  let filterList = props.list.filter((obj)=>{
      let diff = Math.abs(obj.date-date);
      let days = Math.ceil(diff/(1000*60*60*24));
      if(days<8){
        return true;
      }
      else{
        return false;
      }
  })


  return (
    <div id="next-list">
      <ListRender list={filterList}/>
    </div>
  );
};

export default Next7Days;
