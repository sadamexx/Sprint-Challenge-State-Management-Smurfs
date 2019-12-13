import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getSmurf } from '../actions';


const Smurfs = props => {
    return(
        <div>
            <h1>Welcome To Smurfville!</h1>
            {!props.smurf && !props.isFetching && <p>Let's get to know the smurfs who live here</p>}
            {props.isFetching && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                />
            )}
            {props.smurf && <p>My name is {props.smurf[0].name}! I'm {props.smurf[0].age} years old and {props.smurf[0].height} tall! Let's be friends.</p>}
            <button onClick={props.getSmurf}>Get a smurf</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (mapStateToProps, { getSmurf })(Smurfs);
