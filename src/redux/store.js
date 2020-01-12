import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// MIDDLEWARE
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// MIDDLEWARE: receive actions in, then do something with them, then pass them out to the Root Reducer
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted verison of the store
export const persistor = persistStore(store);

export default { store, persistor };
