import React, { useState } from "react";

function Todo() {
  const [toggle, settoggle] = useState(false);
  const [input, setinput] = useState([]);
  const [text, settext] = useState("");
  const bsettoggle = (e) => {
    settoggle(!toggle);

    // console.log("input is :",newstate);
  };
  const bsubmit = () => {
    console.log("input is :", input);

    // var a = input.length + 1;
    // var b = text;
    // var c = a + b;

    // console.log("s", a);
    setinput((old) => {
      return [...input, text];

    });

  };
  //console.log("text is ,",input);
  const mytext = (e) => {
    settext(e.target.value);
  };
  return {
    toggle,
    settoggle,
    bsettoggle,
    mytext,
    bsubmit,
    input,
    setinput,
  };
}

export default Todo;
