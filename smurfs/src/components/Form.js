import React, {useState, useContext} from "react";
import axios from "axios";
import { FormContext } from "../contexts/FormContext";




const AddVillagers = () => {
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age: '',
        height: '',
    });

    const { addSmurfs} = useContext(FormContext)

    const handleChanges = (e) => {
        e.preventDefault();
        setNewSmurf({
            ...newSmurf,
            [e.target.name] : e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurfs()
        };
    
    return(
        <div>
            <h2>Add a smurf to your village!</h2>
            <form onSubmit={addSmurfs}>
                
                <input 
                placeholder="Name"
                name="name"
                value={newSmurf.name}
                onChange={handleChanges}
                />
                <input 
                placeholder="Age"
                name="age"
                value={newSmurf.age}
                onChange={handleChanges}
                />
                <input 
                placeholder="Height"
                name="height"
                value={newSmurf.height}
                onChange={handleChanges}
                />

                <button>Add to village</button>
            </form>

            

        </div>
    )
};



export default AddVillagers;