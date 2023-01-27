import "./App.css";

const App = () => {
  const x = 0;
  const y = 0;

  return (
    <div className="App">
      <div>
        <h1>X: {x}</h1>
        <h1>Y: {y}</h1>
      </div>
      <button onClick={() => console.log("Hello World!")}>
        Send "Hello World!"
      </button>
    </div>
  );
};

export default App;
