import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from '../actions/villageActions';


const Village = props => {
    console.log(props)
    return(
        <div>
            <button onClick={props.fetchSmurf}>Find smurfs!</button>
            {props.smurfs && 
                props.smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <h2>Name:{smurf.name}</h2>
                        <p>Age: {smurf.age}</p>
                        <p>Height:{smurf.height}</p>
                    </div>
                ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.villageReducer.isLoading,  
        smurfs: state.villageReducer.smurfs,
        error: state.villageReducer.error
    }
}

export default connect (mapStateToProps, {fetchSmurf})(Village);