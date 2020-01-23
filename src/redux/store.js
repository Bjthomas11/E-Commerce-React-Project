import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// MIDDLEWARE
// middleware = functions that catch actions and updates the reducer
// logger = catches the actions and logs the action
import logger from "redux-logger";
// action === js object
// thunk is a action creator that returns a function
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

// MIDDLEWARE: receive actions in, then do something with them, then pass them out to the Root Reducer
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted verison of the store
export const persistor = persistStore(store);

export default { store, persistor };
