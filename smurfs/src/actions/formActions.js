export const postSmurf = () => {
    return dispatch => {
        dispatch({ type: "POST_SMURF_START"});
        axios
        .post('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: "POST_SMURF_SUCCESS", payload: res.data});
        })
        .catch(err => {
            dispatch({ type: "POST_SMURF_FAIL", payload: err.response})
        })
    }
};