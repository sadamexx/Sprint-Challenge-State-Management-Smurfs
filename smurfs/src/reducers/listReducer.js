
const initialState = {
    newSmurfs: [
        {
            name: '',
            age: '',
            height: ''
        }
    ]
};

export const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_SMURF":
            return{
                ...state,
                newSmurfs: [
                    ...state.newSmurfs,
                    {
                        name: action.payload,
                        age: action.payload,
                        height: action.payload
                    }
                ]
            }

        default:
            return state;    
    }
}