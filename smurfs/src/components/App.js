import React from "react";
import "./App.css";
import Village from "./Village";
import AddVillagers from "./Form"




function App() {

    return (
      <div className="App">
        <h1>SMURFS!</h1>
          <Village />
          <AddVillagers />
      </div>
    );
  };


export default App;
