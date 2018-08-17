import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/FirstComponent/FirstComponent";
import SecondComponent from "./components/SecondComponent/SecondComponent";


class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent/>
        <SecondComponent/>
      </div>
    );
  }
}

export default App;
