import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);

export default store;




//Si no necesitamos del React DevTools
// import rootReducer from "./reducer";
// import { createStore } from "redux";

// const store = createStore(rootReducer);

// export default store;