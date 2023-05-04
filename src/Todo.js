import { useState, useEffect } from "react";

function Todo() {
  const [toggle, settoggle] = useState(false);
  const [todo, settodo] = useState([]);
  const [todotext, settodotext] = useState("");
  const bsettoggle = (e) => {
    settoggle(!toggle);
  };
  const set_TOdo_Text_function = (e) => {
    settodotext(e.target.value);
  };

  const todoSubmit = () => {
    settodo((old) => [...old, todotext]);
    settodotext("");
  };
  useEffect(() => {
    console.log("length  of todo is :", todo.length);
  }, [todo]);

  return {
    toggle,
    settoggle,
    bsettoggle,
    set_TOdo_Text_function ,
    todoSubmit,
    todo,
    settodo,
    todotext,
  };
}

export default Todo;
