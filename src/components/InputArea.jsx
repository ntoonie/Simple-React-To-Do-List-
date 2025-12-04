import React, {useState} from "react";

function InputArea(props){

  const [text, setText] = useState("");

function handleChange(event){
    const {value} = event.target;
    setText(value);
  }

    return  (
        <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={() => {
            props.onAdd(text);
            setText("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;