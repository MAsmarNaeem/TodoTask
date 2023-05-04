import { useState, useEffect } from "react";

function Todo() {
  const get_local_storage_data = () => {
    let list = localStorage.getItem("items");
    if (list) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  };
  const [toggle, settoggle] = useState(false);
  const [todo, settodo] = useState(get_local_storage_data());
  const [todotext, settodotext] = useState("");
  const bsettoggle = (e) => {
    settoggle(!toggle);
  };

  const set_TOdo_Text_function = (e) => {
    settodotext(e.target.value);
  };

 
  const todoSubmit = () => {
    if (todo.includes(todotext)) {
      alert("This to-do already exists!");
      settodotext("")
    } else {
      settodo((old) => [...old, todotext]);
      settodotext("");
    }
  };
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todo));
  }, [todo]);

  return {
    toggle,
    settoggle,
    bsettoggle,
    set_TOdo_Text_function,
    todoSubmit,
    todo,
    settodo,
    todotext,
  };
}

export default Todo;
