import React from "react";
import logo from "./logo.svg";
import Button from '@material-ui/core/Button';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello
        </a>
      <Button color="primary" size="medium" classKey="text">
        ここはボタンだよ
      </Button>
      </header>
    </div>
  );
}

export default App;
