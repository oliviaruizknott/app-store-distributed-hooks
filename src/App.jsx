import { useGetValue, setValue } from "./hooks/useHaxademicStore";
import AppStoreDebug from "../components/debug/AppStoreDebug";

const RED = "#e84855";
const YELLOW = "#f9dc5c";
const BLUE = "#3185fc";

const App = () => {
  const hexColor = useGetValue("COLOR", "#ffffff");

  return (
    <div className="App" style={{ backgroundColor: hexColor }}>
      <AppStoreDebug />
      <h3>AppStoreDistributed<br/>—with hooks!</h3>
      <button onClick={() => setValue("COLOR", RED)}>
        Red
      </button>
      <button onClick={() => setValue("COLOR", YELLOW)}>
        Yellow
      </button>
      <button onClick={() => setValue("COLOR", BLUE)}>
        Blue
      </button>
    </div>
  );
};

export default App;