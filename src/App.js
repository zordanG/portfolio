import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import './App.sass';
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
