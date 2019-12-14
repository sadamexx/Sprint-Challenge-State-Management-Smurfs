import axios from 'axios';


export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getSmurf = () => dispatch => {    
        dispatch({ type: FETCH_SMURF_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                console.log(response);
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data});
            })    
            .catch(err => {
                dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response});
            });    
    };


export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: ADD_SMURF_START});
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(response => {
            console.log(response);
            dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data});
        })                     
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: err.response});
        });                  
    };    
