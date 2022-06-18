import { combineReducers } from "redux";
import cartSlice from "./cartSlice.js"

const rootReducer = combineReducers({
    cart: cartSlice,
});

export default rootReducer;