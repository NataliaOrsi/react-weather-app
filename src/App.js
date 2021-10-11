import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="container">
          <Search defaultCity="Paris" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/NataliaOrsi/shecodes/tree/main/vanilla-weather-app"
          rel="noreferrer"
        >
          Open-source code
        </a> {" "}
        by Natalia de Mesquita Orsi Vieira
      </footer>
    </div>
  );
}

export default App;
