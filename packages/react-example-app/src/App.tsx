import React from 'react';
import _ from 'lodash';
import { QueryPayload } from '@my-namespace/shared-example-data';
import DarkMode from './react-dark-mode/src/DarkMode';
import logo from './logo.svg';
import './App.css';

function App() {
  const title: string = _.toUpper('Learn React');
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
          {title}
        </a>
        <button
          onClick={() => {
            fetch("http://localhost:3001/data", {})
              .then((response) => response.json())
              .then((data: QueryPayload) => console.log(data.payload));
          }}
        >
          Get my awesome data
        </button>
        <DarkMode />
      </header>
    </div>
  );
}

export default App;
