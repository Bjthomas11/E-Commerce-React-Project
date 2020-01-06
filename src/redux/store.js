import { createStore, applyMiddleware } from "redux";
// MIDDLEWARE
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// MIDDLEWARE: receive actions in, then do something with them, then pass them out to the Root Reducer
const middlewares = [logger];

// applying logger
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
