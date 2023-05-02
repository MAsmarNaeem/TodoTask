import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "../src/Todo";
import React, { useState } from "react";

const App = () => {
  const { mytext, bsubmit, input, text } = Todo();
  const [completed, setCompleted] = useState([]);
  const [mysearch, setsearch] = useState("");
  const [filteredInput, setFilteredInput] = useState(input);

  const handleCheckboxChange = (index) => {
    const newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      newCompleted.splice(newCompleted.indexOf(index), 1);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };
  // const handleCheckboxChange = (index) => {
  //   const newCompleted = [...completed];
  //   if (newCompleted.includes(index)) {
  //     newCompleted.splice(newCompleted.indexOf(index), 1);
  //   } else {
  //     newCompleted.push(index);
  //   }
  //   setCompleted(newCompleted);

  //   const newInput = [...input];
  //   newInput.splice(index, 1);
  //   setinput(newInput);
  // };

  const hlosearch = (e) => {
    const value = e.target.value;
    setsearch(value);

    if (!value.trim()) {
      setFilteredInput([]);
      return;
    }

    const filteredItems = input.filter((item) =>
      item.toLowerCase().includes(value.trim().toLowerCase())
    );
    setFilteredInput(filteredItems);
  };

  return (
    <div className="row mx-3" style={{ marginTop: "20px" }}>
      <h2 className="text-center mb-5">Todo App</h2>
      <div className="col-md-5">
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={mytext}
        />
        <button onClick={bsubmit}>+</button>
        <br />
        {input.length === 0 ? (
          <div>Enter Todos</div>
        ) : (
          <div>
            <h3>Todos</h3>
            {input.length === null ? (
              <div>Enter Todos</div>
            ) : (
              <ol>
                <div>
                  {input.map((item, index) => (
                    <div>
                      {completed.includes(index) ? null : (
                        <div>
                          {" "}
                          <li>
                            <input
                              type="checkbox"
                              onChange={() => handleCheckboxChange(index)}
                              checked={completed.includes(index)}
                            />{" "}
                            {item}
                          </li>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ol>
            )}

            <br />
          </div>
        )}
        <br /> <br />
        <h3>Completed Todos </h3>
        <ol>
          {" "}
          {input.map((item, index) => {
            if (completed.includes(index)) {
              return <li key={index}>{item}</li>;
            } else {
              return null;
            }
          })}
        </ol>
      </div>
      <div className="col-md-4">
        <input type="text" placeholder="Search todo" onChange={hlosearch} />

        <ul>
          {filteredInput === 0
            ? "Search any Todo"
            : filteredInput.map((item, index) => {
                return <li key={index}>{item} </li>;
              })}
        </ul>
      </div>
    </div>
  );
};

export default App;
