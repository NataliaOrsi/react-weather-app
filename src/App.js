import Search from "./Search";
import Translator from "./Translator";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="container">
          <Translator />
          <Search defaultCity="Paris" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/NataliaOrsi/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Natalia de Mesquita Orsi Vieira
      </footer>
    </div>
  );
}

export default App;
