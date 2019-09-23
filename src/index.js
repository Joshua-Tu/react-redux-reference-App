import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";

// const logger = store => next => action => {
//   console.log("dispatch", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   return result;
// };

// const error = store => next => action => {
//   try {
//     next(action);
//   } catch (e) {
//     console.log("error " + e);
//   }
// };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, promise))
);

// store.subscribe(() => console.log("State updated!", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  });
}

serviceWorker.unregister();
