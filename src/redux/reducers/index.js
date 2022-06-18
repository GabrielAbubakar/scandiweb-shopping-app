import { combineReducers } from "redux";
import cartSlice from "./cartSlice.js"

const rootReducer = combineReducers({
    cartSlice,
});

export default rootReducer;