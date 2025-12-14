import Header from "./Conpomment/Header";
import Player from "./Conpomment/Player";
import TimeStopper from "./Conpomment/TimeStopper";

function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeStopper title={"level 1"} tagetTime={1} />
        <TimeStopper title={"level 2"} tagetTime={5} />
        <TimeStopper title={"level 3"} tagetTime={10} />
        <TimeStopper title={"level 4"} tagetTime={15} />
      </div>
    </>
  );
}

export default App;
