import { useState, useEffect } from "react";

function Todo() {
  const [toggle, settoggle] = useState(false);
  const [input, setinput] = useState([]);
  const [text, settext] = useState("");
  const bsettoggle = (e) => {
    settoggle(!toggle);
  };
  const mytext = (e) => {
    settext(e.target.value);
  };

  const bsubmit = () => {
    setinput((old) => [...old, text]);
    settext("");
  };
  useEffect(() => {
    console.log("length  of input is :", input.length);
  }, [input]);

  return {
    toggle,
    settoggle,
    bsettoggle,
    mytext,
    bsubmit,
    input,
    setinput,
    text,
  };
}

export default Todo;
