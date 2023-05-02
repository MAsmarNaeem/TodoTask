import { useState, useEffect } from "react";

function Todo() {
  const [toggle, settoggle] = useState(false);
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("");
  const bsettoggle = (e) => {
    settoggle(!toggle);
  };
  const mytext = (e) => {
    settext(e.target.value);
  };

  const bsubmit = () => {
    settodo((old) => [...old, text]);
    settext("");
  };
  useEffect(() => {
    console.log("length  of todo is :", todo.length);
  }, [todo]);

  return {
    toggle,
    settoggle,
    bsettoggle,
    mytext,
    bsubmit,
    todo,
    settodo,
    text,
  };
}

export default Todo;
