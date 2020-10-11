/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "../reducers/index.reducer";


const persistConfig = {
  key: "root",
  storage,
  blacklist: ['router'],
  debug: true,
};

export const history = createBrowserHistory();
export let persistor;

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. epicMiddleware: Makes redux-observable work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  const store = createStore(
    persistReducer(persistConfig, rootReducer(history)),
    initialState,
    composeEnhancers(...enhancers)
  );
  persistor = persistStore(store, null);
  store.persistor = persistor;
  persistor.persist();

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept("../reducers/index.reducer", () => {
      rootReducer.store.replaceReducer(
        require("../reducers/index.reducer").default()
      );
    });
  }
  return store;
}
