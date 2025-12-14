import { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimeStopper({ title, tagetTime }) {
  const timer = useRef(null);
  const dialog = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(tagetTime * 1000);
  const timeIsActicve = timeRemaining > 0 && timeRemaining < tagetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleClick() {
    timer.current = setInterval(() => {
      // setTimeExpired(true);
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  function handlestop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleResert() {
    setTimeRemaining(tagetTime * 1000);
  }

  return (
    // <section className="challenge">
    //   <h2>{title}</h2>
    //   <p className="challenge-time">
    //     {tagetTime} Second{tagetTime > 1 ? "s" : ""}
    //   </p>
    //   <button>Start</button>
    //   <p className="">Time is running... / Timer inactive</p>
    // </section>
    <>
      <ResultModel
        ref={dialog}
        tageTime={tagetTime}
        remainingTime={timeRemaining}
        onResert={handleResert}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-tme">
          {tagetTime} Second{tagetTime > 1 ? "s" : ""}
        </p>
        {/* <button onClick={handleClick}>{timeStart ? "Stop" : "Start"}</button> */}
        <button onClick={timeIsActicve ? handlestop : handleClick}>
          {timeIsActicve ? "Stop" : "Start"}
        </button>
        <p className={timeIsActicve ? "active" : ""}>
          {timeIsActicve ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
