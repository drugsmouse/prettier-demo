import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const emxampleForThePrecommitHook = {
  some: 'object',
  without: 'trailingComma',
};

// TODO && || operations
const isValid = (1 && 2) || (3 && 4);
// TODO chain methods
const items = {
  pc: '1000$',
  laptop: '800$',
  iphoneX: '1500$',
};

const list = {
  toady: 'read Medium.com',
  toady: 'spend some time at Facebook',
  toady: 'discuss latest news with the guys',
  today: 'make a Prettier demo',
};

function someFunc(
  variable1,
  variable2,
  variable21,
  variable11,
  variable3,
  variable4,
  variable5
) {}

const VeryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyLong =
  'looooooooooooooooooooooooooooooooooooooooooooong';

Object.keys(items)
  .map(() => {})
  .filter(() => {})
  .reduce();

list
  .map()
  .filter()
  .reduce();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
