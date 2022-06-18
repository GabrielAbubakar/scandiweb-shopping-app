import { createStore } from 'redux'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './reducers/index.js'
// import cartSlice from './reducers/cartSlice'



const persistConfig = {
    key: 'shop',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer)
export default store
