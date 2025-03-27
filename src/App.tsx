import "./App.css";
import Translate from "./components/Translate";

function App() {
  return (
    <>
      <h1
        className="font-bold text-center text-4xl font-mono"
        style={{ padding: "10px 0" }}
      >
        Language translator
      </h1>
      <Translate />
    </>
  );
}

export default App;
