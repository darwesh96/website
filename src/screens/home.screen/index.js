import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../../assets/signs.png')} className="App-logo" alt="logo" />
        <p>
         Comming soon
        </p>
        <a
          className="App-link"
          href="tel:+201227095258"
          target="_self"
          rel="noopener noreferrer"
        >
          Contact US
        </a>
      </header>
    </div>
  );
}

export default App;
