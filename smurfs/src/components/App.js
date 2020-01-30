import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import ListForm from './ListForm';






class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <ListForm />
      </div>
    );
  }
}

export default App;
