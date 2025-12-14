import { useState, useRef } from "react";

export default function Player() {
  const playName = useRef();
  const [enteredName, setEnteredName] = useState(null);
  // const [submited, setSubmited] = useState(false);

  // const handleChange = (event) => {
  //   setSubmited(false);
  //   setEnteredName(event.target.value);
  // };

  const handleClick = () => {
    setEnteredName(playName.current.value);
  };
  return (
    <section id="player">
      {/* <h2>Welcom {submited ? enteredName : "NO Name"}</h2>  c1*/}
      {/* <h2>Welcom {enteredName ? enteredName : "NO Name"}</h2> c2 */}
      <h2>Welcom {enteredName ?? "NO Name"}</h2>
      <div>
        {/* <input type="text" onChange={handleChange} value={enteredName} /> */}
        <input type="text" ref={playName} />
        <button onClick={handleClick}> Set Name</button>
      </div>
    </section>
  );
}
