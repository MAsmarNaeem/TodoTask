// import Todo from "../src/Todo";
// import React, { useState } from "react";

// function App() {
//   const { bsettoggle, toggle, mytext, bsubmit, input, setinput } = Todo();
//   const [completed, setCompleted] = useState([]);
//   const [mysearch, setsearch] = useState("");
//   const [filteredInput, setFilteredInput] = useState(input);

//   const handleSearch = () => {
//     const filteredItems = input.filter((item) =>
//       item.toLowerCase().includes(mysearch.toLowerCase())
//     );
//     setFilteredInput(filteredItems);
//   };

//   const handleCheckboxChange = (index) => {
//     console.log("index",index);
//     const newCompleted = [...completed];
//     if (newCompleted.includes(index)) {
//       newCompleted.splice(newCompleted.indexOf(index), 1);
//     } else {
//       newCompleted.push(index);
//     }
//     setCompleted(newCompleted);
//   };
//   const hlosearch = (e) => {
//     setsearch(e.target.value);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>Todo App</h2>

//       {toggle && (
//         <input
//           type="text"
//           placeholder="Enter todo"
//           style={{ marginLeft: "20px", marginTop: "40px" }}
//           onChange={mytext}
//         />
//       )}
//       {toggle && <button onClick={bsubmit}>Submit</button>}

//       {toggle && (
//         <input
//           type="text"
//           placeholder="Search todo"
//           style={{ marginLeft: "200px", marginTop: "40px" }}
//           onChange={hlosearch}
//         />
//       )}
//       {toggle && <button onClick={handleSearch}>Search</button>}
//       <ul style={{ marginLeft: "500px" }}>
//         {filteredInput.map((item, index) => {
//           return (
//             <li
//               key={index}
//               className={completed.includes(index) ? "completed" : ""}
//             >
//               {index}-{item}{" "}
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(index)}
//                 checked={completed.includes(index)}
//               />
//             </li>
//           );
//         })}
//       </ul>

//       {/* <button style={{ marginLeft: "200px" }} onClick={bsettoggle}>
//         +
//       </button> */}

//       {
//         <div style={{ marginLeft: "50px", marginTop: "" }}>
//           {input.map((item, index) => {
//             return (
//               <li
//                 key={index}
//                 className={completed.includes(index) ? "completed" : ""}
//               >
//                 {index}-{item}{" "}
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCheckboxChange(index)}
//                   checked={completed.includes(index)}
//                 />
//               </li>
//             );
//           })}
//         </div>
//       }

//       <h2>Completed Todos are</h2>
//       {input.map((item, index) => {
//         if (completed.includes(index)) {
//           return (
//             <li key={index}>
//               {index}-{item}
//             </li>
//           );
//         } else {
//           return null;
//         }
//       })}
//     </div>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "../src/Todo";
import React, { useState } from "react";

const App = () => {
  const { bsettoggle, toggle, mytext, bsubmit, input, setinput } = Todo();
  const [completed, setCompleted] = useState([]);
  const [mysearch, setsearch] = useState("");
  const [filteredInput, setFilteredInput] = useState(input);

  const handleSearch = () => {
    const filteredItems = input.filter((item) =>
      item.toLowerCase().includes(mysearch.toLowerCase())
    );
    setFilteredInput(filteredItems);
  };

  const handleCheckboxChange = (index) => {
    console.log("index", index);
    const newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      newCompleted.splice(newCompleted.indexOf(index), 1);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };
  const hlosearch = (e) => {
    setsearch(e.target.value);
    handleSearch()
  };

  return (
    <div className="row mx-3" style={{ marginTop: "20px" }}>
      <h2 className="text-center mb-5">Todo App</h2>
      <div className="col-md-5">
        <input type="text" placeholder="Enter Text" onChange={mytext} />

        <button onClick={bsubmit}>+</button>
        <br />

        {input.length === 0 ? (
          <div>Enter Todos</div>
        ) : (
          <div>
            <h3>Todos</h3>
            {input.length === 0 ? (
              <div>Enter Todos</div>
            ) : (
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
            )}

            <br />
            <h3>Completed Todos </h3>
            {input.map((item, index) => {
              if (completed.includes(index)) {
                return <li key={index}>{item}</li>;
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
      <div className="col-md-4">
       
              
        <input
          type="text"
          placeholder="Search todo"
         
          onChange={hlosearch}
        />
    
      <ul >
        { filteredInput==0? "Search any Todo" :   filteredInput.map((item, index) => {
          return (
            <li
              key={index}
              className={completed.includes(index) ? "completed" : ""}
            >
              {item}{" "}
             
            </li>
          );
        })}
      </ul>

 
        
        
      </div>
    </div>
  );
};

export default App;
