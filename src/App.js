import Todo from "../src/Todo";
import React, { useState, useEffect } from "react";
import { BsFillBackspaceFill } from "react-icons/bs";

import "./App.css";

const App = () => {
  const { set_TOdo_Text_function, todoSubmit, todo, todotext, settodo } =
    Todo();
  const get_local_storage_data = () => {
    let list = localStorage.getItem("itemscompleted");
    if (list) {
      return JSON.parse(localStorage.getItem("itemscompleted"));
    } else {
      return [];
    }
  };
  const [completed, setCompleted] = useState(get_local_storage_data());

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
  useEffect(() => {
    localStorage.setItem("itemscompleted", JSON.stringify(completed));
  }, [completed]);
  const searchTodo = (e) => {
    const value = e.target.value;

    if (!value.trim()) {
      setFilteredInput([]);
      return;
    }

    const filteredItems = todo.filter((item) =>
      item.toLowerCase().includes(value.trim().toLowerCase())
    );

    if (filteredItems.length === 0) {
      setFilteredInput(["Record not found"]);
    } else {
      setFilteredInput(filteredItems);
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    settodo(newTodo);
  };

  const handleDeleteTodocompleted = (index) => {
    const newCompleted = [...completed];
    newCompleted.splice(index, 1);
    setCompleted(newCompleted);
  };

  return (
    <div>
      <div className="container-fluid text-center mt-5">
        <h2>Todo App</h2>
      </div>
      <div className="row container justify-content-center mx-5 mt-4">
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
            <>
              {" "}
              {filteredInput.map((item, index) => {
                return <li key={index}>{item} </li>;
              })}
            </>
          )}
        </div>
      </div>
      <div className="row mx-3 mt-3" style={{ marginTop: "20px" }}>
        <div className="col-md-4 ">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={todotext}
              onChange={set_TOdo_Text_function}
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
                          <li style={{ }}>
                            <input
                              type="checkbox"
                              onChange={() => handleCheckboxChange(index)}
                              checked={completed.includes(index)}
                            />{" "}
                            {item}
                            <BsFillBackspaceFill
                              style={{ marginLeft: "200px" }}
                              onClick={() => handleDeleteTodo(index)}
                            />
                          </li>
                          <br />
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
            {completed.length === 0 ? (
              "No record"
            ) : (
              <>
                <ol>
                  {todo.map((item, index) => {
                    if (completed.includes(index)) {
                      return (
                        <>
                          <li key={index} style={{  }}>
                            {item}{" "}
                            <BsFillBackspaceFill
                              style={{ marginLeft: "200px" }}
                              onClick={() => handleDeleteTodocompleted(index)}
                            />
                          </li>{" "}
                          <br />
                        </>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ol>
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
