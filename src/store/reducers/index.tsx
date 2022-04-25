import { combineReducers } from "redux";
import fetchAllCurrency from "./currencies";
//reducers

/**
 * @function rootReducer 
 * @description It combines all  the reducers and share within nested components
 */
const rootReducer = combineReducers({
    fetchAllCurrency
})

export default rootReducer