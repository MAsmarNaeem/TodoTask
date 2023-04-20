import "./App.css";
import Todo from "../src/Todo";
import React, { useState } from "react";

function App() {
  const { bsettoggle, toggle, mytext, bsubmit, input } = Todo();
  const [completed, setCompleted] = useState([]);

  const handleCheckboxChange = (index) => {
    const newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      //newCompleted.splice(newCompleted.indexOf(index), 1);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };

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
        />
      )}
      <button style={{ marginLeft: "200px" }} onClick={bsettoggle}>
        +
      </button>

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
              // checked={completed.includes(index)}
            />
          </li>
        );
      })}

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
