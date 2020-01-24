import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { villageReducer } from './villageReducer';

export default combineReducers({
    listReducer,
    villageReducer
})