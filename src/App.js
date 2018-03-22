import React, { Component } from 'react';
import Mult from './components/mult';
import Subtract from './components/subtract';
import openSocket from 'socket.io-client';
import jwt from 'jsonwebtoken';
import logo from './logo.svg';
import './App.css';

let username1 = { id: 'id1', surname: 'Ivanov', firstname: 'Ivan' };
let token1 = jwt.sign(username1, '$im$alabim');
let opts1 = {
  transports: ['websocket'],
  'query': 'token=' + token1
};
window.socket = openSocket('http://localhost:5000', opts1);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Socket test on React</h1>
        </header>
        <Subtract arg1='20' arg2='10' id='1' />
        <Subtract arg1='40' arg2='4' id='2' />
        <Mult arg1='20' arg2='10' id='3' />
        <Mult arg1='7' arg2='8' id='4' />
      </div>
    );
  }
}

export default App;
