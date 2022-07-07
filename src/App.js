import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Ben";

  function alertName(name) {
    alert(name);
  }

  return (
    <div className="App">
      <button data-testid="alert-button" onClick={() => alertName(name)}>
        Launch
      </button>
    </div>
  );
}

export default App;
