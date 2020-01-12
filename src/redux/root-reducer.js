// ALL REDUCERS WILL LIVE HERE
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
// getting local storage
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // only reducer we want to persist
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  // user reducer is handled by firebase
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
