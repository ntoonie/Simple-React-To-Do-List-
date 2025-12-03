import React, { useState } from "react";

function TodoItem(props){

    const [isDone, setisDone] = useState(false);

    function lineThrough(){
        setisDone(prevValue => !prevValue);
    }

    return <li onClick={lineThrough}
        style={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",            
            width: "100%",                   
            padding: "8px 0",
            cursor: "pointer",
            }}>
            <span style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</span>
            <button onClick = {() => props.onChecked(props.id)} style={{textDecoration: "none"}}>delete</button>
          </li>
}

export default TodoItem;