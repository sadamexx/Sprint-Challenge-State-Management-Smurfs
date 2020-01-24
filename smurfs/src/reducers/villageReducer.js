const initialState = {
    isLoading: false,
    smurfs: null,
    error: ''
}

export const villageReducer =( state = initialState, action ) => {
    switch(action.type){

        case "FETCH_SMURF_START":
            return {
                ...state,
                isLoading: true
            }
        
        case "FETCH_SMURF_SUCCESS":
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }    

        case "FETCH_SMURF_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }    

        default:
            return state;    
    }
}