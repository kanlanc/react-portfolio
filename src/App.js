import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/FirstComponent/FirstComponent";
import SecondComponent from "./components/SecondComponent/SecondComponent";
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";
import FourthComponent from "./components/FourthComponent/FourthComponent";
import FifthComponent from "./components/FifthComponent/FifthComponent";


class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
      </div>
    );
  }
}

export default App;
