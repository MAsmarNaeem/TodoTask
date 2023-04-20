
import Todo from "../src/Todo";
import React, { useState } from "react";

function App() {
  const { bsettoggle, toggle, mytext, bsubmit, input,setinput } = Todo();
  const [completed, setCompleted] = useState([]);
  const[mysearch,setsearch]=useState("")
  const [filteredInput, setFilteredInput] = useState(input);
  
  const handleSearch = () => {
  const filteredItems = input.filter(item => item.toLowerCase().includes(mysearch.toLowerCase()));
  setFilteredInput(filteredItems);}

  const handleCheckboxChange = (index) => {
    const newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      newCompleted.splice(newCompleted.indexOf(index), 1);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };
  const hlosearch=(e)=>
  {
             setsearch(e.target.value)
  }
   

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>

      {toggle && (
        <input
          type="text"
          placeholder="Enter todo"
          style={{ marginLeft: "20px", marginTop: "40px" }}
          onChange={mytext}
        />
      )}
      {toggle && <button onClick={bsubmit}>Submit</button>}

      {toggle && (
        <input
          type="text"
          placeholder="Search todo"
          style={{ marginLeft: "200px", marginTop: "40px" }}
          onChange={hlosearch}
        />
      )}
      {toggle && <button onClick={handleSearch}>Search</button>}
      <ul style={{marginLeft:"500px"}}>
        {filteredInput.map((item, index) => {
          return (
            <li
              key={index}
              className={completed.includes(index) ? "completed" : ""}
            >
              {index}-{item}{" "}
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={completed.includes(index)}
              />
            </li>
          );
        })}
      </ul>

      <button style={{ marginLeft: "200px" }} onClick={bsettoggle}>
        +
      </button>

      

      {
        <div style={{marginLeft:"50px",marginTop:""}}>

{input.map((item, index) => {
        return (
          <li
            key={index}
            className={completed.includes(index) ? "completed" : ""}
          >
            {index}-{item}{" "}
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              checked={completed.includes(index)}
            />
          </li>
        );
      })}
        </div>
        
        
        
        }
      
      <h2>Completed Todos are</h2>
      {input.map((item, index) => {
        if (completed.includes(index)) {
          return (
            <li key={index}>
              {index}-{item}
            </li>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default App;

