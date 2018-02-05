import * as React from 'react';
import './App.css';
import Player from './Components/Player';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Player duration={30} title={'ayyy lmao'} width={500} height={500} />
        </p>
      </div>
    );
  }
}

export default App;
