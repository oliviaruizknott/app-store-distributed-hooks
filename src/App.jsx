import "./App.css";
import { useGetValue, setValue } from "./hooks/useHaxademicStore";

const App = () => {
  const x = useGetValue("MOUSE_X", 0);
  const y = useGetValue("MOUSE_Y", 0);

  return (
    <div className="App">
      <div>
        <h1>X: {x}</h1>
        <h1>Y: {y}</h1>
      </div>
      <button onClick={() => setValue("CUSTOM", "Hello World!")}>
        Send "Hello World!"
      </button>
    </div>
  );
};

export default App;
