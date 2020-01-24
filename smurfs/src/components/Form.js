import React, {useState} from "react";
import { connect } from "react-redux"
import { postSmurf } from "../actions/formActions";

const AddVillagers = props => {
    const [newSmurf, setNewSmurf] = useState([]);

    const handleChanges = (e) => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name] : e.target.value});
    }

    
    }
    return(
        <div>
            <h2>Add a smurf to your village!</h2>
            <form>
                
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

                <button onClick={props.postSmurf}>Add to village</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        newSmurfs: state.listReducer.newSmurfs
    }
}

export default connect (mapStateToProps, {postSmurf})(AddVillagers)