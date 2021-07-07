import React, {useState, useEffect} from "react";
import "./App.css";

import Axios from "axios";
import { VillageContext } from "../contexts/VillageContext";
import { FormContext } from "../contexts/FormContext";
import AddVillagers from "./Form";


function App() {
  const [smurfs, setSmurfs] = useState();
  

 
  useEffect(() => {
    Axios
    .get('http://localhost:3333/smurfs')
    .then(res => 
      setSmurfs(res.data))
    .catch(err => console.log(err)) 
  }, [smurfs])

  const addSmurfs = () => {
    Axios
    .post('http://localhost:3333/smurfs', smurfs)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setSmurfs({ 
      name: '',
      age: '',
      height: ''
      })
  }

    return (
      <div className="App">
        <h1>SMURFS!</h1>
      
        <FormContext.Provider value ={smurfs, addSmurfs} >
            <AddVillagers />
        </FormContext.Provider>
           
        
      </div>
    );
  };


export default App;
