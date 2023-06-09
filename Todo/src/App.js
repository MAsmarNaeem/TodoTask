import Todo from "../src/Todo";
import React, { useState } from "react";

const App = () => {
  const { mytext,todoSubmit, todo, text, setinput } = Todo();
  const [completed, setCompleted] = useState([]);
  const [mysearch, setsearch] = useState("");
  const [filteredInput, setFilteredInput] = useState(todo);

  const handleCheckboxChange = (index) => {
    const newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      newCompleted.splice(newCompleted.indexOf(index), 1);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };
  console.log("input is :", todo);

  const searchTodo = (e) => {
    const value = e.target.value;
    setsearch(value);

    if (!value.trim()) {
      setFilteredInput([]);
      return;
    }

    const filteredItems = todo.filter((item) =>
      item.toLowerCase().includes(value.trim().toLowerCase())
    );
    setFilteredInput(filteredItems);
  };

  return (
    <div>
      <div className="container text-center mt-5">
        <h2>Todo App</h2>
      </div>
      <div className="row mx-3 mt-5" style={{ marginTop: "20px" }}>
        <div className="col-md-4 ">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={text}
              onChange={mytext}
              placeholder="Enter Todo"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={todoSubmit}
            >
              +
            </button>
          </div>
          <br />
          <h3>Todos</h3>

          <div>
            {todo.length === 0 ? (
              "No record"
            ) : (
              <ol>
                <div>
                  {todo.map((item, index) => (
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

          <br />
          <h3>Completed Todos </h3>
          <ol style={{ marginLeft: "-30px" }}>
            {completed.length == 0 ? (
              "No record"
            ) : (
              <>
                <ol>
                  {todo.map((item, index) => {
                    if (completed.includes(index)) {
                      return <li key={index}>{item}</li>;
                    } else {
                      return null;
                    }
                  })}
                </ol>
              </>
            )}
          </ol>
        </div>
        <div className="col-md-4 ">
          <input
            class="form-control"
            onChange={searchTodo}
            type="text"
            placeholder="Search Todo"
            aria-label="readonly input example"
          />

          {filteredInput === 0 ? (
            "Search any Todo"
          ) : (
            <ol>
              {" "}
              {filteredInput.map((item, index) => {
                return <li key={index}>{item} </li>;
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
